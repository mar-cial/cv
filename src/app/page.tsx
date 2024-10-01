import { CurrentDate } from "@/components/current-date";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <section className="flex flex-col justify-between p-12 h-screen">
                <header>
                    <h1 className="text-8xl">bandr.</h1>
                    <p className="text-lg text-zinc-400">build and run.</p>
                </header>

                <article>
                    <p className="text-2xl">
                        Premier digital product and venture studio specializing in
                        innovative solutions for the next generation.
                    </p>
                </article>

                <div>
                    <a
                        href="mailto:cesarmarcialq@gmail.com"
                        className="py-2 px-8 text-xl font-bold bg-orange-600 rounded-md"
                    >
                        Contact us
                    </a>
                </div>

                <div>
                    <div>
                        <CurrentDate />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-8 p-12 min-h-screen">
                <header>
                    <h2 className="font-mono">Services</h2>
                </header>

                <article>
                    <p className="text-zinc-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
                        obcaecati sit laborum quos ut doloribus similique, hic saepe nam
                        quisquam, enim explicabo pariatur soluta dolore quasi aperiam
                        reprehenderit vel ipsum.
                    </p>
                </article>

                <section></section>
            </section>

            <section className="flex flex-col gap-8 pt-8 h-screen">
                <header>
                    <h2 className="text-3xl">My satisfied clients</h2>
                </header>

                <section className="flex flex-col gap-2">
                    <header className="">
                        <h3 className="text-lg">Cabra Sports</h3>
                        <a href="cabragaming.com" className="underline hover:text-blue-500">
                            visit web
                        </a>
                    </header>

                    <article>
                        <p className="italic">
                            &quot;Working with Cesar was a great experience. He handled both
                            the front-end and back-end development efficiently, always keeping
                            me updated and delivering quality work. I&apos;m really happy with
                            the result and would definitely work with them again.&quot;
                        </p>
                        <p>- Jesus Chavez, Cabra Sports Co-Founder</p>
                    </article>

                    <section>
                        <header>
                            <h4 className="text-lg">Contributions:</h4>
                        </header>

                        <ul className="py-2 list-disc list-inside">
                            <li>
                                Led the end-to-end planning, development, and maintenance of the
                                application
                            </li>
                            <li>
                                Increased user engagement with 4000+ recurring users
                                participating in weekly events
                            </li>
                            <li>
                                Implemented WebSocket functionality for real-time notifications
                                and user activity tracking
                            </li>
                            <li>
                                Developed features for seamless user profile creation and
                                modification
                            </li>
                            <li>
                                Integrated gamification mechanics using data from external APIs
                                to enhance user experience
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="flex flex-col gap-2">
                    <header>
                        <h3 className="text-lg">Suma Wealth</h3>
                        <a
                            href="https://sumawealth.com/"
                            className="underline hover:text-blue-500"
                        >
                            visit web
                        </a>
                    </header>

                    <article>
                        <p className="italic">
                            &quot;I was really impressed with Cesar&apos;s development skills.
                            He was easy to communicate with, met every deadline, and resolved
                            issues quickly and effectively. The project went smoothly, and
                            I&apos;m very happy with the results.&quot;
                        </p>
                        <p>- Mary Hernandez, Suma Wealth Co-Founder</p>
                    </article>

                    <section>
                        <header>
                            <h4 className="text-lg">Contributions:</h4>
                        </header>

                        <ul className="py-2 list-disc list-inside">
                            <li>Maintained and optimized CI/CD pipelines</li>
                            <li>Developed dynamic React components</li>
                            <li>
                                Collaborated with the design team to create pages, slides,
                                modals, and more
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </main>
    );
}
