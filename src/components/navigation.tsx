import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="grid grid-cols-3">
            <div>
                <Link href="/" className="font-mono font-semibold hover:underline">
                    bandr.
                </Link>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <Link href="/dashboard" className="hover:underline">
                    Example dashboard
                </Link>
                <Link href="/integrations" className="hover:underline">
                    API Integrations
                </Link>
            </div>

            <div className="flex justify-end">
                <a className="px-4 bg-orange-600" href="mailto:cesar@bandr.com">
                    Contact
                </a>
            </div>
        </nav>
    );
}
