'use client';

import { useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Container from '@/components/Container';
import PublicRoute from '@/components/PublicRoute';

export default function Login() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handlesubmit = (e) => {
        e.preventDefault();
    }

    const handleLogin = async (role) => {
        await login(role, username);
    }

    return (
        <PublicRoute>
            <Header />

            <main>
                <Container>
                    <h1 className='font-bold text-2xl text-center mb-6'>Login</h1>

                    <div className='w-96 max-md:w-auto m-auto'>
                        <form onSubmit={handlesubmit}>
                            <div className='mb-6'>
                                <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nome de usuário</label>
                                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Username' required />
                            </div>

                            <div className='mb-6'>
                                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                                <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
                            </div>

                            <div className='grid grid-cols-2'>
                                <button onClick={() => handleLogin('user')} className='text-sm font-semibold px-4 py-3 mr-2 bg-blue-500 text-white rounded'>
                                    Login User
                                </button>

                                <button onClick={() => handleLogin('admin')} className='text-sm font-semibold px-4 py-3 bg-green-500 text-white rounded'>
                                    Login Admin
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </main>
        </PublicRoute>
    );
}