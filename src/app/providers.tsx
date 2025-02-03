'use client';
// use all across the application
// see if a user is signed in from a client component 
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps{
    children:React.ReactNode
}
export default function Providers({children} :ProvidersProps){
    return (
            <SessionProvider>
                    <NextUIProvider>{children}</NextUIProvider>
            </SessionProvider>
            )

}
