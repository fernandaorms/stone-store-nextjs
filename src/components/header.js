'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { Button, Dialog, DialogPanel, Input } from '@headlessui/react'
// import { FaBars, FaX, FaMagnifyingGlass, FaCircleUser, FaCartShopping } from 'react-icons/fa6';

import Container from '@/components/Container'

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='bg-white'>
            <Container>
                <nav>
                    <div className='logo'>
                        <Link href='/' className='flex items-center gap-1 font-semibold'>
                            <img className='h-6 w-auto' src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600' />
                            
                            <span>StoneStore</span>
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    )
}