'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

export default function PrivateRoute({ children, allowedRoles }) {
    const { auth, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.loggedIn || !allowedRoles.includes(auth.role)) {
            router.push('/');
        }
    }, [auth, loading, allowedRoles, router]);

    if (loading) {
        return null;
    }

    if (!auth.loggedIn || !allowedRoles.includes(auth.role)) {
        return null;
    }
    
    return children;
}
