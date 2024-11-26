'use client';

import Header from '@/components/Header';
import Container from '@/components/Container';

export default function Page() {
    const { loading } = useUser();

    if (loading) {
        return <div>Carregando...</div>; // Pode exibir um spinner ou mensagem de carregamento
    }

    return (
        <div>
            <Header />

            <main>
                <Container>
                    <h1>Bem-vindo ao Painel Administrativo</h1>
                    <p>Esta é uma página restrita apenas para administradores.</p>
                </Container>
            </main>
        </div>
    );
}
