import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex flex-col px-8 pt-8">
            <Link href="/" className="font-mono font-semibold hover:underline">
                bandr.
            </Link>
            <Link href="/dashboard" className="hover:underline">
                Example dashboard
            </Link>
            <Link href="/integrations" className="hover:underline">
                API Integrations
            </Link>
            <a href="mailto:cesar@bandr.com">Contact</a>
        </nav>
    );
}
