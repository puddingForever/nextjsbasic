import Link from 'next/link';
import {db} from '@/db';
import {notFound} from 'next/navigation';
import * as actions from '@/actions'

interface SnippetShowPageProps {
    params : {
        id : string
    }
}

export default async function SnippetShowPage(props : SnippetShowPageProps){
    await new Promise((r) => setTimeout(r,1000)) // 운영모드에서는 캐시화가 되니까 pause되지 않는다 
    const snippet = await db.snippet.findFirst({
        where : { id : parseInt(props.params.id) }
    });

    if(!snippet){
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null,snippet.id)
    return <div>
        <div className='flex m-4 justify-between items-center'>
            <h1>{snippet.title}</h1>        
            <div className='flex gap-4'>
                <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
                <form action={deleteSnippetAction}>               
                     <button>Delete</button>
                </form>
            </div>
        </div>
         <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
            <code>{snippet.code}</code>
         </pre>
        </div>
}

// called automatically 
export async function generateStaticParams(){
    const snippets = await db.snippet.findMany();

    return snippets.map((snippet) => {
        return {
            id : snippet.id.toString()
        }
    })
}
