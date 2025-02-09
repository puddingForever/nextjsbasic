'use server';
import {db} from '@/db';
import { generateToken } from '@/utils/jwt';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function LoginUser(formState:{message : string},formData : FormData){
    try{
        const email = formData.get("email");
        const password = formData.get("password");

        if(typeof email !== 'string' || email.length < 3){
            return {
                message: "이메일이 올바르지 않습니다."
            }
        }
        if(typeof password !== 'string' || email.length < 3){
            return {
                message: "비밀번호가 올바르지 않습니다."
            }
        }

        const user = await db.userAccount.findUnique({
            where :{
                email
            }
        })

        //로그인정보 확인 
        if(!user || !(await bcrypt.compare(password,user.password))){
            return { message : "로그인 정보가 올바르지 않습니다."}
        }

        //사용자 비활성화됬는지 확인 
        if(!user.allowUser){
            return {
                message : "관리자에 의해 계정이 비활성화 상태입니다."
            }
        }

        //토큰 생성 
        const token = generateToken(user);
        return {
            message :"" , success : true, token
        }
      
    }catch(err:unknown){
        if(err instanceof Error){
            return {
                message : err.message
            }
        }else{
            return {
                message : "something went wrong..."
            }
        }
    }

 
}