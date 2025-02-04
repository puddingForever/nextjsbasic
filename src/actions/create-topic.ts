'use server';

import {z} from 'zod';
const createTopicSchema = z.object({
    name : z.string().min(3,{message:"문자 3개 이상 입력하세요"}).regex(/^[a-z-]+$/,{message: "영어 소문자만 입력할 수 있습니다."}),
    description : z.string().min(10)
})

export async function createTopic(formState : number,formData:FormData){
    const result = createTopicSchema.safeParse({
        name : formData.get('name'),
        description : formData.get('description')

    })

    if(!result.success){
        console.log(result.error.flatten().fieldErrors)
    }

    return 10;
 
    // TODO : revalidate the hompeage


}