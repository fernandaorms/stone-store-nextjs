import Container from "@/components/Container";

export default async function Page({ params }) {
    const id = (await params).id

    return (
        <main>
            <Container>
                <h1>My Post: {id}</h1>
            </Container>
        </main>
    );
}
