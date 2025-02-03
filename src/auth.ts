import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import {PrismaAdapter} from '@auth/prisma-adapter'; // create user whenever logsin 
import {db} from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if(!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET){
    throw new Error("MISSING GITHUB oAuth credentials")
}

// handers : {GET,POST} <- Oauth setup과 관련됨 , called automatically , auth : allows us to figure out whether user is signed
export const { handlers : {GET,POST}, auth, signOut, signIn } =NextAuth({
    adapter: PrismaAdapter(db),
    providers:[
        GitHub({
        clientId:GITHUB_CLIENT_ID,
        clientSecret:GITHUB_CLIENT_SECRET
       })
    ],
    callbacks:{ // 로그인 시도될 때마다 실행 , 
       
        // 사용자 정보 session 으로 저장 
        async session({session,user}:any){
            if(session && user) { 
                session.user.id = user.id;
            }
            return session;
        }
    }
})
