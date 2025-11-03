import Link from "next/link";
import {Code} from "lucide-react";

export default function PodcastPage() {
    return (
        // <main>
        //     {/*<h1>Podcast</h1>*/}
        //     {/*<ul>*/}
        //     {/*    <li><Link href="/podcast/1">Episode 1</Link></li>*/}
        //     {/*    <li><Link href="/podcast/2">Episode 2</Link></li>*/}
        //     {/*</ul>*/}
        //     <main className="flex justify-center items-center flex-1">
        //         <div className="text-center">
        //             <Code size={200} />
        //             <h1>
        //                 Work in progress
        //             </h1>
        //         </div>
        //     </main>
        // </main>
        <main className="flex justify-center items-center flex-1">
            <div className="text-center">
                <Code size={200}/>
                <h1>
                    Podcast work in progress
                </h1>
            </div>
        </main>
    )
}