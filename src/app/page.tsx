import PageHeader from "@/components/user/page-header";
import Link from "next/link";
import { auth, signIn, signOut } from "./auth";
import { Suspense } from "react";

export default function Page() {
    return (
        <main>
            <PageHeader
                title={
                    "Let’s bring your ideas to life. Together, we’ll build the perfect application."
                }
            />

            <section>
                <header>
                    <h2 className="text-2xl font-bold">User Dashboards</h2>
                </header>

                <article>
                    <p>
                        I specialize in building user-friendly dashboards that bring data to
                        life. Whether it&apos;s creating user profiles, tracking activity,
                        or providing personalized experiences, I can help you manage and
                        visualize key metrics. Dynamic charts and data visualizations are at
                        the core of creating an intuitive and engaging experience for your
                        users.
                    </p>

                    <div>
                        <Link href="/dashboard" className="text-orange-600 hover:underline">
                            Check out a live example of a custom user dashboard.
                        </Link>
                    </div>
                </article>
            </section>

            <section>
                <header>
                    <h2 className="text-2xl font-bold">API Integrations</h2>
                </header>

                <article>
                    <p>
                        Seamless API integrations are key to unlocking the full potential of
                        your application. I can connect your app to external or internal
                        APIs, ensuring smooth data flow, processing, and storage. Let&apos;s
                        integrate the tools and services you rely on, effortlessly.
                    </p>

                    <p>
                        Whether it&apos;s real-time data, payment gateways, or third-party
                        libraries, I&apos;ll ensure everything works in harmony.
                    </p>

                    <div>
                        <Link
                            href="/integrations"
                            className="text-orange-600 hover:underline"
                        >
                            View an example of an API integration in action.
                        </Link>
                    </div>
                </article>
            </section>

            <section>
                <header>
                    <h2 className="text-2xl font-bold">
                        User Authentication &amp; Authorization
                    </h2>
                </header>

                <article>
                    <p>
                        Secure and frictionless user authentication is vital. I implement
                        robust solutions that allow users to sign up and log in with ease,
                        using their preferred authentication provider (Google, Facebook,
                        etc.). No more hassle of managing users—let&apos;s keep it simple
                        and secure.
                    </p>
                    <Suspense fallback={<div>Loading</div>}>
                        <Login />
                    </Suspense>
                </article>
            </section>
        </main>
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
