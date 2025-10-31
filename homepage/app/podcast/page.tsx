import Link from "next/link";

export default function PodcastPage() {
    return (
        <main>
            <h1>Podcast</h1>
            <ul>
                <li><Link href="/podcast/1">Episode 1</Link></li>
                <li><Link href="/podcast/2">Episode 2</Link></li>
            </ul>
        </main>
    )
}