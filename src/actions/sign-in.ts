'use server';

import * as auth from '@/auth';

 // oatuh 제공자(provider)설정
 // 어떤 oAuth provider로 로그인할지 지정한다. 
export async function signIn(){
    return auth.signIn('github'); // github를 통해 로그인을 시도한다 
}
