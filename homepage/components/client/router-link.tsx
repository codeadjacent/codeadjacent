'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function RouterLink({children, href}: { children: React.ReactNode, href: string }) {
    const path = usePathname()
    return (
        <Link href={href} className={path === href ? 'border-b-2 border-b-black dark:border-b-white' : ''}>{children}</Link>
    )
}