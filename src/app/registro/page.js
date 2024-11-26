'use client';

import { useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Container from '@/components/Container';
import PublicRoute from '@/components/PublicRoute';

export default function Register() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handlesubmit = async (e) => {
        e.preventDefault();

        await login('user', username);
    }

    return (
        <PublicRoute>
            <Header />

            <main>
                <Container>
                    <h1 className='font-bold text-2xl text-center mb-6'>Crie sua conta</h1>

                    <div className='w-96 max-md:w-auto m-auto'>
                        <form onSubmit={handlesubmit}>
                            <div className='mb-6'>
                                <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nome de usuário</label>
                                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Username' required />
                            </div>

                            <div className='mb-6'>
                                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email address</label>
                                <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='john.doe@company.com' required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                                <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
                            </div>

                            <div className='grid'>
                                <button type='submit' className='text-sm font-semibold px-4 py-3 mr-2 bg-blue-500 text-white rounded'>
                                    Registro
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </main>
        </PublicRoute>
    );
}