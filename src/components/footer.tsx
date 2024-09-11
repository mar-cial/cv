import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="flex gap-2">
                <div>Contact me through:</div>
                <a href="mailto:cesar@marcialdev.com" className="underline">
                    email
                </a>
            </div>
            <Link href="/privacy-policy">Privacy Policy</Link>
        </footer>
    );
}
