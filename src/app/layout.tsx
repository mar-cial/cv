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
            <body
                className={`${inter.className} p-8 container mx-auto max-w-screen-sm`}
            >
                <nav className="flex justify-between items-center">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <a href="mailto:buildandrun@proton.me" className="text-orange-600">
                            Contact me
                        </a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
