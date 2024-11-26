'use client';

import PrivateRoute from '@/components/PrivateRoute';
import Header from '@/components/Header';
import Container from '@/components/Container';

export default function DashLayout({ children }) {
    return (
        <PrivateRoute allowedRoles={['admin']}>
            <div>
                <Header />

                <main>
                    <Container>
                        {children}
                    </Container>
                </main>
            </div>
        </PrivateRoute>
    );
}
