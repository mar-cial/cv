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
            <body className={`${inter.className}`}>
                <nav>
                    <div>
                        <Link href="/">bandr.</Link>
                    </div>
                    <div></div>
                </nav>
                {children}
            </body>
        </html>
    );
}
