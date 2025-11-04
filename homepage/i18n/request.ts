import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from "next/headers";

const SUPPORTED = new Set(['en', 'de']);

export default getRequestConfig(async ({}) => {
    const cookie = await cookies();
    const header = await headers();
    const localeFromHeader = header.get('accept-language')?.split(',')?.[0]
    const localeFromCookie = cookie.get('locale')?.value;
    const prioritizedLocale = localeFromCookie || localeFromHeader;
    const locale = SUPPORTED.has(prioritizedLocale ?? '') ? (prioritizedLocale as 'en' | 'de') : 'en';
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});