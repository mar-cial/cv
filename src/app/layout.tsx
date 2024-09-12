import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

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
            <body className={`${inter.className} `}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
