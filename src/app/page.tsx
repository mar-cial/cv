import Link from "next/link";
import { auth, signIn, signOut } from "./auth";
import PageHeader from "@/components/page-header";

function Value() {
    return (
        <section className="p-8 xl:p-12">
            <header className="text-center">
                <h2 className="text-4xl font-semibold">How we deliver value</h2>
            </header>

            <section className="grid gap-12 p-12 xl:grid-cols-3">
                <article className="flex flex-col gap-6">
                    <header className="text-center">
                        <h3 className="text-2xl xl:text-4xl">
                            Custom Software Tailored to Your Business Needs
                        </h3>
                    </header>
                    <div className="text-center">
                        <p>
                            Every solution we build is designed to fit your unique goals,
                            ensuring the software we create works seamlessly with your
                            operations and scales with your growth.
                        </p>
                    </div>
                </article>
                <article className="flex flex-col gap-6">
                    <header className="text-center">
                        <h3 className="text-2xl xl:text-4xl">
                            End-to-End Development with Full Transparency
                        </h3>
                    </header>
                    <div className="text-center">
                        <p>
                            From initial concept to final deployment, we manage the entire
                            development process, providing regular updates and working closely
                            with you to keep everything aligned and on track.
                        </p>
                    </div>
                </article>
                <article className="flex flex-col gap-6">
                    <header className="text-center">
                        <h3 className="text-2xl xl:text-4xl">
                            Reliable Support and Continuous Optimization
                        </h3>
                    </header>
                    <div className="text-center">
                        <p>
                            Beyond launch, we provide ongoing support, maintenance, and
                            feature enhancements to ensure your software stays ahead of
                            evolving business demands.
                        </p>
                    </div>
                </article>
            </section>
        </section>
    );
}

function Clients() {
    return (
        <section className="flex flex-col gap-6 p-8 xl:p-12 min-h-dvh">
            <section className="grid flex-1 xl:grid-cols-2">
                <section>
                    <section>
                        <header className="text-center xl:text-left">
                            <h2 className="text-4xl font-semibold xl:text-7xl">
                                Hear what our satisfied clients have to say
                            </h2>
                        </header>
                    </section>
                </section>

                <section className="flex flex-col gap-4">
                    <section className="">
                        <article className="flex flex-col p-10">
                            <div>
                                <div>5 stars</div>
                            </div>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                                recusandae nemo totam aperiam laboriosam voluptatibus harum
                                iure. Dolores eligendi ipsam, quo aspernatur laborum, rem qui
                                est assumenda voluptatum quaerat voluptatem?
                            </div>

                            <header className="flex gap-3">
                                <div>
                                    <div className="w-12 h-12 bg-zinc-400"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg">Jesus Chavez</h4>
                                    <p className="text-sm">CABRA Sports</p>
                                </div>
                            </header>
                        </article>
                        <article className="flex flex-col p-4">
                            <div>
                                <div>5 stars</div>
                            </div>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
                                maxime. Autem, nesciunt quibusdam ullam non perspiciatis atque
                                ex expedita vero quaerat, animi ab eligendi? Illo ad quaerat
                                ullam explicabo molestiae.
                            </div>

                            <header className="flex gap-3">
                                <div>
                                    <div className="w-12 h-12 bg-zinc-400"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg">Jesus Chavez</h4>
                                    <p className="text-sm">CABRA Sports</p>
                                </div>
                            </header>
                        </article>
                        <article className="flex flex-col p-4">
                            <div>
                                <div>5 stars</div>
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                quaerat culpa, doloribus molestiae ducimus ullam sequi expedita
                                dicta laboriosam eius eum iusto, qui rerum nemo, ex quas dolor
                                tempora corporis.
                            </div>

                            <header className="flex gap-3">
                                <div>
                                    <div className="w-12 h-12 bg-zinc-400"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg">Jesus Chavez</h4>
                                    <p className="text-sm">CABRA Sports</p>
                                </div>
                            </header>
                        </article>
                    </section>
                </section>
            </section>
            <section className="flex col-span-2 justify-between items-center p-6 text-white bg-orange-600 rounded-md">
                <div className="text-xl">
                    Ready to become another succesful testimony?
                </div>
                <div>Contact now</div>
            </section>
        </section>
    );
}

async function Login() {
    const session = await auth();
    if (!session) {
        return (
            <form
                action={async () => {
                    "use server";
                    await signIn();
                }}
            >
                <button type="submit" className="text-emerald-500">
                    Create account
                </button>
            </form>
        );
    }

    return (
        <div>
            <div>You are already signed in!</div>
            <div>
                Your session will be stored and will refresh each time you come back.
                Less friction for the user.
            </div>
            <div className="flex ju">
                You can use the button below to sign out. We won&apos;t keep any of your
                information or do anything with it. Just want to illustrate how easy it
                can be.
            </div>
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button type="submit" className="text-blue-500">
                    Sign out.
                </button>
            </form>
        </div>
    );
}

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
                        <h2 className="text-2xl">Reporting generation tools</h2>
                        <Link href="/dashboard" className="text-blue-500">
                            See examples
                        </Link>
                    </header>

                    <article>
                        <p>
                            Do not waste your time with clunky software. We will develop a
                            solution to your needs and it will be fast, maintainable and
                            upgradable.
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
