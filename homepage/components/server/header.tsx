import Link from "next/link";
import RouterLink from "@/components/client/router-link";
import ThemeSwitcher from "@/components/client/theme-switcher";
import LanguageSwitcher from "@/components/client/language-switcher";
import {GithubAccountLogo} from "@/components/server/logos/github-account-logo";
import FigmaLogo from "@/components/server/logos/figma-logo";


export default function Header() {
    return (
        <div className="navbar sticky top-4 z-20 shadow-sm p-0 min-h-0 px-4 bg-white/95 dark:bg-black/85">
            <div className="navbar-start w-full flex items-center">
                <Link href="/" className="text-xl font-bold">CodeAdjacent</Link>
                <ul className="menu menu-horizontal ml-6 gap-2 [&_li>*]:rounded-none hidden lg:flex">
                    <li><RouterLink href="/">Home</RouterLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <ThemeSwitcher></ThemeSwitcher>
                <LanguageSwitcher></LanguageSwitcher>
                <FigmaLogo></FigmaLogo>
                <GithubAccountLogo></GithubAccountLogo>
            </div>
        </div>
    )
}