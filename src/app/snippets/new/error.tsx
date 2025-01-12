'use client'
// dont use it. user cant go to create page 
interface ErrorPageProps{
    error : Error,
    reset : () => void;
}
export default function ErrorPage({error} : ErrorPageProps){
    return <div>{error.message}</div>

}