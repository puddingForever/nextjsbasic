'use server';
import {revalidatePath} from 'next/cache';
import type {Topic} from '@prisma/client';
import {redirect} from 'next/navigation';
import {z} from 'zod';
import {auth} from '@/auth';
import paths from '@/paths';
import { db } from '@/db';

const createTopicSchema = z.object({
    name : z.string().min(3,{message:"문자 3개 이상 입력하세요"}).regex(/^[a-z-]+$/,{message: "영어 소문자만 입력할 수 있습니다."}),
    description : z.string().min(10)
})

interface CreateTopicFormState{
    errors :{
        name?:string[];
        description?:string[];
        _form? : string[]; //auth or not 
    }
}

export async function createTopic(formState : CreateTopicFormState,formData:FormData) : Promise<CreateTopicFormState>{
    const result = createTopicSchema.safeParse({
        name : formData.get('name'),
        description : formData.get('description')
    })

    if(!result.success){
        return {
            errors : result.error.flatten().fieldErrors,
        }
    }

    const session = await auth();
    if(!session || !session.user){
        return {
            errors:{
                _form: ['you must be signed in to do this!']
            },
        }
    } 

    let topic : Topic;
    try{
       topic = await db.topic.create({
            data:{
                slug : result.data.name,
                description : result.data.description
            }
        })
    }catch(err:unknown){
        if(err instanceof Error){
            return {
                errors:{
                    _form:[err.message]
                },
            }
        }else{
            return {
                errors : {
                    _form: ['something went wrong']
                }
            }
        }
    }
    
    revalidatePath("/")
    //it is thrown when error occurs ,so it should be outside of try-catch
    redirect(paths.topicShowPath(topic.slug));

    return {
        errors: {}
    };

  
}