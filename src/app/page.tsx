import { Button } from "@nextui-org/react"
import * as actions from '@/actions'
import {auth} from '@/auth';
import Profile from '@/components/profile';
// user is an obj about user 
export default async function Home() {

  // get the session obj 
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">sign Out</Button>
      </form>

      {
        (session?.user) ? <div>{JSON.stringify(session.user)}</div> : <div>Signed out</div>
      } 

      <Profile />
    </div>
  )
}
