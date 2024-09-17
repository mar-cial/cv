import PageHeader from "@/components/page-header";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <PageHeader title={"I build custom software solutions for every need."} />

            <section className="pb-8">
                <p>
                    Hi, I&apos;m Cesar Marcial, a full-stack software developer with a
                    passion for building scalable solutions. From creating internal tools
                    with Go to launching MVPs for startups that have attracted VC funding,
                    I specialize in turning ideas into impactful, real-world applications.
                </p>
            </section>

            <section className="flex flex-col gap-8">
                <header>
                    <h2 className="text-3xl">My strenghts</h2>
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
                            Provide your users with a seamless experience by presenting
                            complex data clearly and efficiently. Whether it&apos;s building
                            user databases or creating intuitive dashboards, I ensure all key
                            information is accessible at a glance.
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
                            I specialize in integrating with any external API to bring your
                            ideas to life. No matter the service or platform, I will make sure
                            your project connects smoothly with the data and tools you need.
                        </p>
                    </article>
                </section>
            </section>

            <section className="flex flex-col gap-8 pt-8">
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
