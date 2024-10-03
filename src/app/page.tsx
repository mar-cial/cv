import { CurrentDate } from "@/components/current-date";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
    return (
        <main>
            <section className="flex flex-col gap-6 justify-end p-8 h-screen">
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
                        href="mailto:cesar@bandr.digital"
                        className="py-2 px-8 text-xl font-bold bg-orange-600 rounded-md text-zinc-100"
                    >
                        Contact us
                    </a>
                </div>

                <div>
                    <Suspense fallback={<div>Loading</div>}>
                        <CurrentDate />
                    </Suspense>
                </div>
            </section>

            <section className="flex flex-col gap-8 p-8">
                <header>
                    <h2 className="font-mono">Services</h2>
                </header>

                <article>
                    <p className="dark:text-zinc-300">
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

            <section className="flex flex-col gap-8 p-8">
                <header>
                    <h2 className="font-mono">Examples</h2>
                </header>

                <section className="grid gap-4 md:grid-cols-2">
                    <article className="flex flex-col gap-4">
                        <header>
                            <h3 className="text-2xl font-semibold">API Integrations</h3>
                        </header>

                        <div className="flex flex-col gap-2">
                            <div>
                                <p className="dark:text-zinc-300">
                                    We’ve worked with all kinds of APIs to bring clients exactly
                                    what they need. Whether it’s handling authentication or
                                    pulling data to generate custom reports, we make it happen.
                                </p>
                            </div>

                            <div>
                                <Link
                                    href="/integrations"
                                    className="text-orange-600 underline"
                                >
                                    Check out an example of what we can do
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4">
                        <header>
                            <h3 className="text-2xl font-semibold">
                                Data Collection, Cleanup & Reporting with Dynamic Dashboards
                            </h3>
                        </header>

                        <div className="flex flex-col gap-2">
                            <div>
                                <p className="dark:text-zinc-300">
                                    We’ll help you clean up, extract, and analyze all the
                                    important data in your database. Get real-time insights with
                                    dynamic, visually appealing dashboards to stay on top of your
                                    business.
                                </p>
                            </div>

                            <div>
                                <Link href="/dashboard" className="text-orange-600 underline">
                                    See an example of our dashboards in action
                                </Link>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
}
