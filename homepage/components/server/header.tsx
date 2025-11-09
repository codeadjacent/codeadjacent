import Link from "next/link";
import Image from "next/image";
import RouterLink from "@/components/client/router-link";
import ThemeSwitcher from "@/components/client/theme-switcher";
import LanguageSwitcher from "@/components/client/language-switcher";
import figmaLogo from "@/public/logos/figma.png";
import linkedInLogo from "@/public/logos/linkedin.png";
import githubLogo from "@/public/logos/github.png";


export default function Header() {
    return (
        <div className="navbar sticky top-4 z-20 shadow-sm p-0 min-h-0 px-4 bg-white/95 dark:bg-black/85">
            <div className="navbar-start w-full flex items-center">
                <Link href="/" className="text-xl font-bold">Han Che</Link>
                <ul className="menu menu-horizontal ml-6 gap-2 [&_li>*]:rounded-none hidden lg:flex">
                    <li><RouterLink href="/">Home</RouterLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <ThemeSwitcher></ThemeSwitcher>
                <LanguageSwitcher></LanguageSwitcher>
                <Link
                    href="https://www.figma.com/proto/nilnyLetPWjL4aeKdMPVJu/CodeAdjacent?page-id=0%3A1&node-id=23-4&t=8QROPTFygxxq7ghc-0&scaling=contain&content-scaling=responsive"
                    target="_blank">
                    <Image src={figmaLogo} alt="Figma" width={12} height={16}/>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/han-che/"
                    target="_blank">
                    <Image src={linkedInLogo} alt="LinkedIn" width={16} height={16}/>
                </Link>
                <Link
                    href="https://github.com/codeadjacent/codeadjacent"
                    target="_blank">
                    <Image className="dark:bg-white dark:rounded-full" src={githubLogo} alt="GitHub" width={16} height={16}/>
                </Link>
            </div>
        </div>
    )
}