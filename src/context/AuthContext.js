'use client'

import { createContext, useContext, useState, useEffect } from 'react';

import LoadingScreen from '@/components/LoadingScreen';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ loggedIn: false, role: null, username: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            setLoading(true);
            try {
                const storedAuth = localStorage.getItem('auth');
                if (storedAuth) {
                    setAuth(JSON.parse(storedAuth));
                }
            } catch (error) {
                console.error('Erro ao carregar autenticação:', error);
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    const login = async (role, username) => {
        setLoading(true);
        try {
            // Simula uma chamada assíncrona (ex.: API)
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulação de atraso
            setAuth({ loggedIn: true, role: role, username: username});
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setAuth({ loggedIn: false, role: null });
        localStorage.removeItem('auth');
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <AuthContext.Provider value={{ auth, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
