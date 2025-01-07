import Link from 'next/link';
import {db} from '@/db';
import {notFound} from 'next/navigation';

interface SnippetShowPageProps {
    params : {
        id : string
    }
}

export default async function SnippetShowPage(props : SnippetShowPageProps){
    await new Promise((r) => setTimeout(r,1000))
    const snippet = await db.snippet.findFirst({
        where : { id : parseInt(props.params.id) }
    });

    if(!snippet){
        return notFound();
    }
    return <div>
        <div className='flex m-4 justify-between items-center'>
            <h1>{snippet.title}</h1>        
            <div className='flex gap-4'>
                <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
                <button>Delete</button>
            </div>
        </div>
         <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
            <code>{snippet.code}</code>
         </pre>
        </div>
}