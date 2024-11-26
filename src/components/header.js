'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
// import { FaBars, FaX, FaMagnifyingGlass, FaCircleUser, FaCartShopping } from 'react-icons/fa6';

import { useAuth } from '@/context/AuthContext';
import Container from '@/components/Container';

export default function Header() {
    const { auth, loading, login, logout } = useAuth();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-white py-4 mb-12 border-b-2 border-gray-200'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='logo'>
                        <Link href='/' className='flex items-center gap-1 font-semibold'>
                            <img className='h-6 w-auto' src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600' />

                            <span>StoneStore</span>
                        </Link>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link href='produtos' className='font-semibold'>Produtos</Link>

                        {(auth.loggedIn && auth.role == 'admin') && (
                            <Link href='dash' className='font-semibold'>Dashboard</Link>
                        )}
                    </div>

                    <div className='flex items-center gap-2'>
                        {auth.loggedIn ? (
                            <>
                                <div>
                                    <span >Olá, </span>
                                    <span className='font-semibold'>{auth.username}</span>
                                </div>

                                <button onClick={logout} className='px-4 py-4 border-2 border-red-500 text-red-500 rounded'>
                                    <FaArrowRightFromBracket />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href='login' className='text-sm font-semibold px-4 py-2 rounded border-2 border-blue-500 text-blue-500'>
                                    Login
                                </Link>

                                <Link href='registro' className='text-sm font-semibold px-4 py-2 bg-blue-500 text-white rounded'>
                                    Criar conta
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    )
}