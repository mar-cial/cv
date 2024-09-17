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
                <header>
                    <h2 className="text-3xl">Our strenghts</h2>
                </header>
                <section>
                    <header className="flex justify-between items-center">
                        <h3 className="text-2xl">User dashboards</h3>
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
                        <h3 className="text-2xl">API integrations</h3>
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

            <section className="flex flex-col gap-8 pt-8">
                <header>
                    <h2 className="text-3xl">Our satisfied costumers</h2>
                </header>

                <section className="flex flex-col gap-2">
                    <header className="">
                        <h3 className="text-lg">Cabra Sports</h3>
                    </header>

                    <article>
                        <p className="italic">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                            ducimus quasi similique dignissimos dolore, consectetur fuga
                            placeat officiis delectus quidem obcaecati. Voluptatem hic sit
                            cumque sapiente? A aspernatur ipsa quidem!"
                        </p>
                        <p>- Jesus Chavez</p>
                    </article>

                    <section>
                        <header>
                            <h4 className="text-lg">Work done:</h4>
                        </header>

                        <ul className="py-2 list-disc list-inside">
                            <li>User registration and authorization</li>
                            <li>Profile creation and customization </li>
                            <li>Gamification of sports events</li>
                        </ul>
                    </section>
                </section>
            </section>
        </main>
    );
}
