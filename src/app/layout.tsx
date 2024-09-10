import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cesar Marcial - Web Developer",
    description: "Cesar Marcial is a web developer with 3 years of experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} p-4 container mx-auto max-w-screen-sm`}
            >
                <nav className="flex justify-between items-center py-4">
                    <Link href="/">Home</Link>
                    <div className="flex gap-2">
                        <Link href="/dashboard">Example dashboard</Link>
                        <Link href="/integrations">API Integrations</Link>
                    </div>
                </nav>
                {children}
                <footer>
                    <div>Contact me</div>
                </footer>
            </body>
        </html>
    );
}
