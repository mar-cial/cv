import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'

import './globals.css'

const body = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cesar Marcial | Software Developer',
    description: 'This is my CV slash blog, if I ever get to it',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${body.className} bg-zinc-900 text-zinc-100`}>{children}</body>
        </html>
    )
}
