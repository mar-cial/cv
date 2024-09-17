import PageHeader from "@/components/page-header";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <PageHeader title={"We build great software."} />

            <section className="pb-8">
                <p>
                    We build custom software. We like to cater to startups that need an
                    MVP. We also like to build internal tools for your business. We will
                    solve any problems you have in your day to day.
                </p>
            </section>

            <section className="flex flex-col gap-8">
                <section>
                    <header className="flex justify-between items-center">
                        <h2 className="text-2xl">User dashboards</h2>
                        <Link href="/dashboard" className="text-blue-500">
                            See an example
                        </Link>
                    </header>

                    <article>
                        <p>
                            Give your users a seamless experience while working with data. Any
                            data you need a t a quick glance, we can work to extract it and
                            present it in a clear manner.
                        </p>
                    </article>
                </section>

                <section className="">
                    <header className="flex justify-between items-center">
                        <h2 className="text-2xl">API integrations</h2>
                        <Link href="/integrations" className="text-blue-500">
                            See an example
                        </Link>
                    </header>

                    <article>
                        <p>
                            We will work with any external API to make your idea come to life.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    );
}
