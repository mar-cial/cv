import Link from "next/link";

export function Hero() {
    return (
        <section className="grid p-12 h-screen xl:grid-cols-2">
            <header className="flex flex-col gap-6 border xl:p-12">
                <h1 className="font-semibold xl:text-8xl">
                    Building software that moves your business forward.
                </h1>

                <p className="text-xl">
                    We offer <strong>custom</strong> solutions designed to
                    <strong> scale</strong>,<strong> innovate</strong>, and
                    <strong> deliver results</strong>.
                </p>

                <section className="flex flex-col gap-2 border">
                    <p>If you are thinking of building applications with:</p>
                    <ul className="flex flex-col gap-2">
                        <Link href="/dashboard">User dashboard</Link>
                        <Link href="/integrations">API Integrations</Link>
                        <Link href="/dashboard">User dashboard</Link>
                    </ul>
                </section>
            </header>
        </section>
    );
}
