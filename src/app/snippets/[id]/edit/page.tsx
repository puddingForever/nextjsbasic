import {notFound} from 'next/navigation'
import {db} from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form'


interface SnippetEditPageProps{
    params:{
        id : string
    }
}

// fetch 
// update
// data fetching is already on  , so we cant directly change to client component
// we should use react monaco editor 
export default async function SnippetEditPage(props : SnippetEditPageProps){
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where : {id}
    })

    if(!snippet){
        return notFound();
    }


    return <div>
        <SnippetEditForm snippet={snippet} />
       </div>

}