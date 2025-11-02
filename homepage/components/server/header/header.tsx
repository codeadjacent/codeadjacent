import Link from "next/link";
import RouterLink from "@/components/client/router-link";
import ThemeToggle from "@/components/client/theme-toggle";

export default function Header() {
    return (
        <div className="navbar sticky top-4 z-20 bg-base-100 shadow-sm p-0 min-h-0 px-4">
            <div className="navbar-start w-min">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 [&_li>*]:rounded-none rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><RouterLink href="/">Home</RouterLink></li>
                        <li><RouterLink href="/podcast">Podcast</RouterLink></li>
                        <li><RouterLink href="/about">About</RouterLink></li>
                    </ul>
                </div>
                <Link href="/" className="text-xl font-bold">CodeAdjacent</Link>
            </div>
            <div className="navbar-end w-full">
                <ul className="menu menu-horizontal gap-2 [&_li>*]:rounded-none hidden lg:flex">
                    <li><RouterLink href="/">Home</RouterLink></li>
                    <li><RouterLink href="/podcast">Podcast</RouterLink></li>
                    <li><RouterLink href="/about">About</RouterLink></li>
                </ul>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    )
}