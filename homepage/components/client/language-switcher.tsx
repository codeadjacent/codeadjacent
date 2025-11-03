'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation'; // Use the standard next/navigation router
import {useTransition} from 'react';
import {toUpper} from "lodash-es";
import {ChevronDown} from "lucide-react";
import {useTranslations} from 'next-intl';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('LOCALE');

    function onSelectChange(locale: string) {
        document.cookie = `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : ''); // 1 year
        startTransition(() => {
            router.refresh();
        });
    }

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">{toUpper(locale)}
                <ChevronDown size={16}/></div>
            <ul tabIndex={-1} onClick={() => (document.activeElement as HTMLInputElement)?.blur?.()}
                className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                <li><a onClick={() => onSelectChange('de')}>{t('de')}</a></li>
                <li><a onClick={() => onSelectChange('en')}>{t('en')}</a></li>
            </ul>
        </div>
    );
}