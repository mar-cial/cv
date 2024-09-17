import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "bandr - software development agency",
    description: "We build quality MVP products for startups",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} p-8 xl:p-12`}>
                <nav className="flex justify-between items-center">
                    <div>
                        <Link href="/">bandr.</Link>
                    </div>
                    <div>
                        <Link
                            href="mailto:cesarmarcialq@gmail.com"
                            className="text-orange-600"
                        >
                            Contact me
                        </Link>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
