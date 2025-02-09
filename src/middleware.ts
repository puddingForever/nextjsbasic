import {NextRequest, NextResponse} from 'next/server';
import {verifyToken} from '@/utils/jwt'

export function middleware(request: NextRequest){
    const token = request.cookies.get("auth_token")?.value;// 쿠키에서 토큰가져옴 
    console.log("middleware", token)
    // 토큰이 없거나 검증 실패시 로그인 페이지 리디렉션
    if(!token || !verifyToken(token)){
        return NextResponse.redirect(new URL("/login", request.url))
    }
   return NextResponse.next();
}

export const config = {
    matcher:"/snippets/new"
}