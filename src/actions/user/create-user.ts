'use server'
import { db } from "@/db"
import bcrypt from 'bcryptjs';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formState : {message : string}, formData : FormData){
    try{
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if(typeof email !== 'string' || email.length < 3){
            return {
                message: "email should be longer "
            }
        }

        if(typeof password !== 'string' || password.length < 3){
            return {
                message : "password should be longer"
            }
        }

        if(typeof confirmPassword !== 'string' || confirmPassword.length < 3 
            || password !== confirmPassword
        ){
            return {
                message: "비밀번호가 일치하지 않습니다."
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.userAccount.create({
            data : {
                email,
                password : hashedPassword,
            }
        })

        return {message : "회원가입이 완료되었습니다."}
       
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