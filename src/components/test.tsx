import {users} from '../../drizzle/schemas';
import {drizzle} from 'drizzle-orm/d1';

export default async function Test(){
    const db = drizzle(process.env.DB);
    const userData = await db.select().from(users).all();
    console.log(userData);
    return '';
}