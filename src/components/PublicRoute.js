'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

export default function PublicRoute({ children }) {
    const { auth, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.loggedIn) {
            router.push('/');
        }
    }, [auth, loading, router]);

    if (loading) {
        return null;
    }

    if (auth.loggedIn) {
        return null;
    }

    return children;
}
