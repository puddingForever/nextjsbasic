import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import {PrismaAdapter} from '@auth/prisma-adapter'; // create user whenever logsin 
import {db} from '@/db';
import GitLab from "next-auth/providers/gitlab";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if(!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET){
    throw new Error("MISSING GITHUB oAuth credentials")
}

// handers : {GET,POST} <- Oauth setup과 관련됨 , called automatically , auth : allows us to figure out whether user is signed
// 
export const { handlers : {GET,POST}, auth, signOut, signIn } =NextAuth({
    adapter: PrismaAdapter(db),
    providers:[
       GitLab({
        clientId:GITHUB_CLIENT_ID,
        clientSecret:GITHUB_CLIENT_SECRET
       })
    ],
    callbacks:{
        // useually not needed, here we are fixing a bug 
        async session({session,user}:any){
            if(session && user) { //if we cant identify , we wont return it 
                session.user.id = user.id;
            }
            return session;
        }
    }
})
