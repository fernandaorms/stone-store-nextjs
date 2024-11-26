export default function Test() {
    <div>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <div className='flex lg:flex-1'>
                <Link href='/' className='flex items-center gap-1 font-semibold'>
                    <img
                        alt=''
                        src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                        className='h-6 w-auto'
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

            <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-4'>
                <div className="hidden items-center gap-x-2 lg:flex">
                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            type="search"
                            placeholder="Search"
                            className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="!absolute left-3 top-[13px]">
                            <svg
                                width="13"
                                height="14"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                    fill="#CFD8DC"
                                />
                                <path
                                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                    stroke="#CFD8DC"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <Button size="md" className="rounded-lg ">
                        Search
                    </Button>
                </div>


                <FaMagnifyingGlass className='size-5' />

                <FaCircleUser className='size-5' />

                <FaCartShopping className='size-5' />
            </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
            <div className='fixed inset-0 z-10' />
            <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                <div className='flex items-center justify-between'>
                    <Link href='/' className='flex items-center gap-1 font-semibold'>
                        <img
                            alt=''
                            src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                            className='h-6 w-auto'
                        />
                        <span>StoneStore</span>
                    </Link>

                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(false)}
                        className='-m-2.5 rounded-md p-2.5 text-gray-700'
                    >
                        <span className='sr-only'>Close menu</span>
                        <FaX aria-hidden='true' className='size-5' />
                    </button>
                </div>

                <div className='mt-6 flow-root'>
                    <div className='-my-6 divide-y divide-gray-500/10'>
                        <div className='space-y-2 py-6'>
                            <Link href='/' className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-${pathname === '/' ? 'blue-500' : 'gray-900'} hover:bg-gray-50`}>
                                Home
                            </Link>

                            <Link href='/produtos' className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-${pathname === '/produtos' ? 'blue-500' : 'gray-900'} hover:bg-gray-50`}>
                                Produtos
                            </Link>

                            <Link href='/pedidos' className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-${pathname === '/pedidos' ? 'blue-500' : 'gray-900'} hover:bg-gray-50`}>
                                Pedidos
                            </Link>

                            <Link href='/sobre' className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-${pathname === '/sobre' ? 'blue-500' : 'gray-900'} hover:bg-gray-50`}>
                                Sobre
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
    </div>
}