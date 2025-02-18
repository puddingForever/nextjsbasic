import { drizzle } from 'drizzle-orm/d1';
import { users } from '../../../../drizzle/schemas'
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm'; // eq 임포트 추가
import { env } from 'process';
import { getRequestContext } from "@cloudflare/next-on-pages"
import * as schema from './schema';

export const runtime = 'edge'; // Edge Runtime 사용

export async function GET(req: Request) {

    try {
        const db = drizzle(process.env.DB);
        console.log("drizzle 연결경로",db);
        const userData = await db.select().from(users).where(
                                                            eq(users.id, 1)
                                                        )
        console.log(userData);
        return NextResponse.json({ users: userData });
    } catch (error) {
        console.log("에러?")
        return NextResponse.json({ status: 500 });
    }
}
