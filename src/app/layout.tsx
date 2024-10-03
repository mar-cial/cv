import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "bandr - software development",
    description: "We build quality products and MVP's for startups",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} `}>
                <nav className="flex fixed top-6 left-6 z-50 w-24 bg-white">
                    <Link href="/" className="flex-1 pl-4 w-full h-full font-mono">
                        home
                    </Link>
                </nav>
                {children}
                <footer className="container flex flex-col gap-4 p-8 mx-auto max-w-screen-md">
                    <p>You ready to get started? Share us your project.</p>
                    <a
                        className="py-1 px-4 font-semibold text-center text-white bg-orange-600 rounded-md"
                        href="mailto:cesar@bandr.digital"
                    >
                        Send us a message
                    </a>
                </footer>
            </body>
        </html>
    );
}
