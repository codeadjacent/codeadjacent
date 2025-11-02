'use client';
import { JSX, useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {ChevronDown, Moon, Sun, SunMoon} from "lucide-react";
import {capitalize} from "lodash-es"

const themeIconMap: Record<string, JSX.Element> = {
    light: <Sun size={16}/>,
    dark: <Moon size={16}/>,
    system: <SunMoon size={16}/>
}
export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className="dropdown dropdown-bottom dropdown-end lg:tooltip lg:tooltip-left" data-tip={"Current Theme: " + capitalize(theme)}>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">{themeIconMap[theme ?? 'system']} <ChevronDown size={16}/></div>
            <ul tabIndex={-1} onClick={() => (document.activeElement as HTMLInputElement)?.blur?.()}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => setTheme('light')}><Sun size={16} />Light</a></li>
                <li><a onClick={() => setTheme('dark')}><Moon size={16} />Dark</a></li>
                <li><a onClick={() => setTheme('system')}><SunMoon size={16} />System</a></li>
            </ul>
        </div>
    )
}