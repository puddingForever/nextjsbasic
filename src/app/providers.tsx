'use client';
// use all across the application
import { NextUIProvider } from "@nextui-org/react";
interface ProvidersProps{
    children:React.ReactNode
}
export default function Providers({children} :ProvidersProps){
    return <NextUIProvider>{children}</NextUIProvider>

}