import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "bandr - software development agency",
    description: "we build quality MVP products for startups",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} p-8 xl:p-12`}>
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
