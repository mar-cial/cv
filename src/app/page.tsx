import { CurrentDate } from "@/components/current-date";
import { FeatureCard } from "@/components/feature-card";

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

            <section className="flex flex-col gap-8 p-12">
                <header>
                    <h2 className="font-mono">Services</h2>
                </header>

                <article>
                    <p className="text-zinc-300">
                        At our agency, we focus on delivering solutions that make a real
                        impact. Whether it’s designing intuitive interfaces, building
                        powerful websites, or deploying cloud-based systems, we tailor each
                        project to your unique needs. We work closely with you every step of
                        the way to ensure the final product not only meets but exceeds your
                        expectations. Whatever your goals, we’re here to help bring them to
                        life.
                    </p>
                </article>
                <section className="flex flex-col divide-y divide-zinc-500">
                    <FeatureCard
                        title="UI/UX Design"
                        content="We create user-friendly designs that not only look good but also make it easy for your customers to navigate. Our goal is to enhance the overall user experience, ensuring that every interaction is smooth and enjoyable."
                    />
                    <FeatureCard
                        title="Client Collaboration Strategy"
                        content="We believe that open communication leads to successful projects. Our collaboration strategy includes regular check-ins, feedback loops, and clear documentation, so we’re always on the same page with our clients."
                    />
                    <FeatureCard
                        title="Web Development"
                        content="From sleek landing pages to complex web applications, we handle all aspects of web development. Our team uses the latest technologies to build responsive and fast websites that meet your business needs."
                    />
                    <FeatureCard
                        title="API Development and Integrations"
                        content="We specialize in creating custom APIs that allow different software systems to communicate effectively. Whether you need a new API or want to integrate existing services, we’ve got you covered."
                    />
                    <FeatureCard
                        title="Cloud Solutions and Deployment"
                        content="Take advantage of the cloud with our deployment services. We help you move your applications to the cloud, ensuring scalability and security while making it easier to manage your infrastructure."
                    />
                </section>
            </section>

            <section className="flex flex-col gap-8 pt-8 min-h-screen">
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

            <section className="p-12">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                    dignissimos tempora temporibus! Quos, numquam vel? Aliquid
                    perspiciatis, asperiores facere iusto, eligendi aperiam consequatur
                    accusantium beatae magni fugit unde cupiditate temporibus.
                </p>
            </section>
        </main>
    );
}
