'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FaBars, FaX } from 'react-icons/fa6';

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='bg-white'>
            <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
                <div className='flex lg:flex-1'>
                    <Link href='#' className='-m-1.5 p-1.5 flex'>
                        <img
                            alt=''
                            src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                            className='h-8 w-auto'
                        />
                        <span>StoneStore</span>
                    </Link>
                </div>

                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                    >

                        <span className='sr-only'>Abrir menu principal</span>

                        <FaBars aria-hidden='true' className='size-6' />
                    </button>
                </div>

                <div className='hidden lg:flex lg:gap-x-12'>
                    <Link href='/' className={`text-sm/6 font-semibold text-${pathname === '/' ? 'blue-500' : 'gray-900'}`}>
                        Home
                    </Link>

                    <Link href='/produtos' className={`text-sm/6 font-semibold text-${pathname === '/produtos' ? 'blue-500' : 'gray-900'}`}>
                        Produtos
                    </Link>

                    <Link href='/pedidos' className={`text-sm/6 font-semibold text-${pathname === '/pedidos' ? 'blue-500' : 'gray-900'}`}>
                        Pedidos
                    </Link>
                    <Link href='/sobre' className={`text-sm/6 font-semibold text-${pathname === '/sobre' ? 'blue-500' : 'gray-900'}`}>
                        Sobre
                    </Link>
                </div>

                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    {/* <MagnifyingGlassIcon className='size-6' />

                    <UserCircleIcon className='size-6' />

                    <ShoppingCartIcon className='size-6' /> */}
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
                <div className='fixed inset-0 z-10' />
                <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link href='#' className='-m-1.5 p-1.5'>
                            <img
                                alt=''
                                src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                                className='h-8 w-auto'
                            />

                            <span>StoneStore</span>
                        </Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                        >
                            <span className='sr-only'>Close menu</span>
                            <FaX aria-hidden='true' className='size-6' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Link
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Features
                                </Link>

                                <Link
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Features
                                </Link>
                                <Link
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Marketplace
                                </Link>
                                <Link
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Company
                                </Link>
                            </div>
                            <div className='py-6'>
                                <Link
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}