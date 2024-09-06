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
                <nav className="flex justify-between items-center pb-4">
                    <Link href="/">Home</Link>
                    <Link
                        href="/dashboard"
                        className="py-1 px-4 bg-emerald-600 rounded-md"
                    >
                        Example dashboard
                    </Link>
                </nav>
                {children}
                <footer>
                    <div>Contact me</div>
                </footer>
            </body>
        </html>
    );
}
