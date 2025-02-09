//JWT 토큰생성 

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || ''; 

//JWT 토큰생성
export function generateToken(user:{id:number,email:string}){
    return jwt.sign(
        {id:user.id, email:user.email}, // 페이로드(사용자정보)
        JWT_SECRET, // 비밀키
        {expiresIn : '1h'}
        
    )
}

//JWT 토큰 검증 (서버컴포넌트에서 사용 )
export function verifyToken(token :string){
    try{
        const decoded =  jwt.verify(token, JWT_SECRET);
        console.log(decoded)
        return decoded;
    }catch(error){
        console.log("error",error)
        return null;
    }
}