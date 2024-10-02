import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
                {children}
                <footer className="flex flex-col gap-4 p-12">
                    <p>You ready to get started? Share us your project.</p>
                    <a
                        className="py-1 px-4 font-semibold text-center bg-orange-600 rounded-md"
                        href="mailto:cesar@bandr.com"
                    >
                        Send us a message
                    </a>
                </footer>
            </body>
        </html>
    );
}
