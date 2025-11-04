// proxy.ts
import createMiddleware from 'next-intl/middleware';
import {defineRouting} from "next-intl/routing";


export const proxy = createMiddleware(defineRouting({
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localePrefix: 'never',
    localeDetection: false
}));

export const config = {
    // Match only internationalized routes
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};