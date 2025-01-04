import Link from 'next/link';

export default function Header(){
    return (<div className='w-full absolute text-white z-10'>
        <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href="/" className='font-bold text-3xl'>Home</Link>
            <div className='space-x-4 text-xl'>
                <Link href="/performance">performance</Link>
                <Link href="/reliability">reliability</Link>
                <Link href="/scale">scale</Link>
            </div>
        </nav>
     </div>);
}