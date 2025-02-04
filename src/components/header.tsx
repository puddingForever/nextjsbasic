import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,

} from '@nextui-org/react';
import React from 'react';
import HeaderAuth from '@/components/header-auth'

export default function Header(){

    
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand><Link href="/">Discuss</Link></NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem><Input /></NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>       
                    <HeaderAuth />
            </NavbarContent>
        </Navbar>
    );
}