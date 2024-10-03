import { Suspense } from "react";
import { TeamsComparison, TeamsComparisonLoader } from "./comparison";
import { GamePredictions, GamePredictionsLoader } from "./predictions";
import { MatchDetails, MatchDetailsLoader } from "./information";
import PageHeader from "@/components/page-header";

export default function Page() {
    return (
        <main className="p-8">
            <PageHeader title="API Integrations" />

            <section>
                <article className="flex flex-col gap-2">
                    <p>
                        We&apos;ve got a ton of experience working with all kinds of API
                        integrations, so we can easily connect your apps with external
                        services and data sources. Whether it&apos;s plugging in third-party
                        APIs, building custom ones, or working with REST, GraphQL, or
                        WebSocket protocols, we make sure data flows smoothly between
                        systems. Our focus is on optimizing performance, keeping everything
                        secure, and managing complex data structures to keep your apps
                        running efficiently and reliably. Whatever you need integrated,
                        we&apos;ve got a solution that&apos;ll fit your project goals.
                    </p>

                    <p>
                        We&apos;ve even put together a quick example of components similar
                        to what we&apos;ve built before. The requests are secure and fast,
                        and we cache the responses to make sure everything runs quickly and
                        smoothly, giving users the best experience.
                    </p>

                    <p>
                        For example, if you want to grab all the details about the next
                        Major League Soccer match:
                    </p>
                </article>
            </section>

            <section className="py-8">
                <header>
                    <h3 className="text-3xl font-semibold">Sports API Dashboard</h3>
                </header>

                <section className="grid gap-4 md:grid-cols-2">
                    <section className="flex flex-col rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Match details</h2>
                        </header>
                        <section className="flex-grow p-4 rounded-md border border-zinc-700">
                            <Suspense fallback={<MatchDetailsLoader />}>
                                <MatchDetails />
                            </Suspense>
                        </section>
                    </section>

                    <section className="flex flex-col rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Teams comparison</h2>
                        </header>
                        <section className="flex-grow p-4 rounded-md border border-zinc-700">
                            <Suspense fallback={<TeamsComparisonLoader />}>
                                <TeamsComparison />
                            </Suspense>
                        </section>
                    </section>

                    <section className="container flex flex-col mx-auto max-w-screen-sm rounded-md md:col-span-2">
                        <header className="flex gap-2 py-4 text-2xl font-semibold">
                            <h2>Predictions provided by:</h2>
                            <a
                                href="https://api-sports.io/"
                                className="text-orange-600 hover:underline"
                            >
                                API Sports
                            </a>
                        </header>
                        <section className="flex-grow p-4 rounded-md border border-zinc-700">
                            <Suspense fallback={<GamePredictionsLoader />}>
                                <GamePredictions />
                            </Suspense>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
}
