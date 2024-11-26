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
        <header className='bg-white'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='logo'>
                        <Link href='/' className='flex items-center gap-1 font-semibold'>
                            <img className='h-6 w-auto' src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600' />

                            <span>StoneStore</span>
                        </Link>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link href='produtos'>Produtos</Link>

                        {(auth.loggedIn && auth.role == 'admin') && (
                            <Link href='dash'>Dashboard</Link>
                        )}
                    </div>

                    <div className='flex items-center gap-4'>
                        {auth.loggedIn ? (
                            <>
                                <div>
                                    <span >Olá, </span>
                                    <span className='font-semibold'>{auth.username}</span>
                                </div>

                                <button onClick={logout} className='h-9 w-9 border-2 border-red-500 text-red-500 rounded flex items-center justify-center'>
                                    <FaArrowRightFromBracket />
                                </button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => login('role', 'Usuário')} className='px-4 py-2 mr-2 bg-blue-500 text-white rounded'>
                                    Login User
                                </button>

                                <button onClick={() => login('admin', 'Administrador')} className='px-4 py-2 bg-green-500 text-white rounded'>
                                    Login Admin
                                </button>
                            </>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    )
}