import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-8">
            <div className="p-4 rounded-md bg-zinc-800 text-zinc-100">
                <div className="flex gap-2">
                    <div>Contact me through:</div>
                    <a href="mailto:cesar@marcialdev.com" className="underline">
                        email
                    </a>
                </div>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
        </footer>
    );
}
