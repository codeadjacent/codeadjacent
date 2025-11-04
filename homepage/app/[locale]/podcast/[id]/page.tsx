export default async function PodcastDetailPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return (
        <main>
            <h1>Podcast Episode {id}</h1>
        </main>
    )
}