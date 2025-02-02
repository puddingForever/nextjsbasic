# nextui

npm install @nextui-org/react framer-motion
tailwind.config.ts do import things !
so that tailwind can find the class component

# prisma setup

npm install prisma
initialize -> npx prisma init --datasource-provider sqlite

# nextauth

for model we need,
account , session , user , verificationToken
create model, and 'npx prisma migrate dev'
and make folder in src , db / index.ts <-- it makes the import easy
all across the project

# OAuth

https://github.com/settings/applications/new
OAuth(오스)는 **"Open Authorization"**의 약자로, 사용자가 자신의 로그인 정보를 직접 제공하지 않고도 다른 서비스(예: 깃허브, 구글, 카카오 등)를 통해 인증 및 권한 부여를 받을 수 있는 표준 인증 프로토콜이에요. 이를 통해 애플리케이션은 사용자의 데이터를 안전하게 접근할 수 있습니다.

OAuth의 기본 개념
사용자(User) – 인증을 진행하는 당사자
클라이언트(Client) – 인증을 요청하는 애플리케이션 (예: Next.js 앱)
인증 서버(Authorization Server) – 로그인 및 권한 부여를 처리 (예: GitHub, Google, Kakao 등)
리소스 서버(Resource Server) – 보호된 사용자 데이터를 제공
Authorization callback URL <-- github가 인증을 완료하고 사용자를 다시 돌려보내는 주소

깃허브 setting에서 토큰 받고 env.local에 설정, 그 후 라이브러리 설치
npm install --save--exact @auth/core@.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

auth.ts 파일에서 모든 auth과정을 체크한다.
import {PrismaAdapter} from '@auth/prisma-adapter'; // 로그인할 때마다 , 사용자 정보를 저장해야한다.
prisma schema에 있는 User테이블에 자동으로 정보를 넣어줌
이때 prisma adapter가 사용하는 필드 들이라서 필수 정보를 수정하면 에러남

auth.ts에서
nextauth -> callback , async session() is called whenever we try to verify a user

handers : {GET,POST} <- Oauth setup과 관련됨 , called automatically ,
auth : allows us to figure out whether user is signed
Yes, in the context of OAuth authentication with NextAuth.js, the clientId refers to the client ID assigned to your application by the OAuth provider (in this case, GitLab). This ID identifies your application when making requests to the OAuth provider.

In this setup, the "client" is typically your Next.js application. When a user attempts to sign in via GitLab, your Next.js app (acting as the client) will send a request to GitLab’s OAuth endpoint, including the clientId and clientSecret (which are used to authenticate your app with GitLab). GitLab then verifies the request and either redirects the user to the authentication page or returns a token, which your Next.js app will use to authenticate the user.

So, yes, your Next.js app is the "client" in this OAuth flow, and the clientId is part of the request to authenticate and authorize the app with GitLab.
