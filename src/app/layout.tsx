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
                <nav className="flex flex-col">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/dashboard" className="hover:underline">
                        Example dashboard
                    </Link>
                    <Link href="/integrations" className="hover:underline">
                        API Integrations
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
