
export default async function Page({ params }) {
    const id = (await params).id

    return (
        <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
            <h1>My Post: {id}</h1>
        </main>
    );
}
