import Link from "next/link";

export function Hero() {
    return (
        <section className="grid items-center p-8 h-screen xl:grid-cols-2">
            <header className="flex flex-col gap-6 xl:gap-12 xl:p-12">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl xl:text-8xl">
                    Building software that moves your business forward.
                </h1>
                <p className="text-xl font-light sm:text-2xl xl:text-3xl">
                    We offer <strong>custom</strong> solutions designed to
                    <strong> scale</strong>, <strong>innovate</strong>, and
                    <strong> deliver results</strong>.
                </p>
            </header>

            <section className="flex flex-col gap-8 xl:gap-12">
                <p className="text-lg sm:text-xl">
                    If you're thinking of building applications with:
                </p>
                <ul className="flex flex-col gap-4">
                    <li className="w-full border-b border-black">
                        <Link
                            href="/dashboard"
                            className="flex justify-between items-center text-lg font-medium sm:text-xl"
                        >
                            <div>User dashboards</div>
                            <div>&gt;</div>
                        </Link>
                    </li>
                    <li className="w-full border-b border-black">
                        <Link
                            href="/integrations"
                            className="flex justify-between items-center text-lg font-medium sm:text-xl"
                        >
                            <div>API Integrations</div>
                            <div>&gt;</div>
                        </Link>
                    </li>
                    <li className="w-full border-b border-black">
                        <Link
                            href="/users"
                            className="flex justify-between items-center text-lg font-medium sm:text-xl"
                        >
                            <div>Users</div>
                            <div>&gt;</div>
                        </Link>
                    </li>
                </ul>
                <div className="grid text-center">
                    <a
                        href="mailto:cesar@bandr.com"
                        className="p-2 font-semibold text-white bg-orange-500 rounded-md"
                    >
                        Get in contact
                    </a>
                </div>
            </section>
        </section>
    );
}
