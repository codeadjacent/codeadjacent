import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/server/header";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { PdfViewerModalProvider } from "@/context/pdf-viewer-modal-context";
import PdfViewerModal from "@/components/client/pdf-viewer-modal";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import ChatWidget from "@/components/client/chat-widget";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CodeAdjacent",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <head>
                <Script src="https://t.contentsquare.net/uxa/1b84f086c3e82.js" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <ThemeProvider enableSystem={true} defaultTheme="system">
                    <NextIntlClientProvider>
                        <PdfViewerModalProvider>
                            <div className="container mx-auto">
                                <Header></Header>
                                {children}
                            </div>
                            <PdfViewerModal></PdfViewerModal>
                            <ChatWidget />
                        </PdfViewerModalProvider>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>

            <GoogleAnalytics gaId="G-V2L3MDGED2" />
        </html>
    );
}
