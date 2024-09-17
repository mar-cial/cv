import { Suspense } from "react";
import { TeamsComparison, TeamsComparisonLoader } from "./comparison";
import { GamePredictions, GamePredictionsLoader } from "./predictions";
import { MatchDetails, MatchDetailsLoader } from "./information";
import PageHeader from "@/components/page-header";

export default function Page() {
    return (
        <main>
            <PageHeader title="API Integrations" />

            <section>
                <article className="flex flex-col gap-2">
                    <p>
                        I have extensive experience working with a wide variety of API
                        integrations, allowing me to seamlessly connect your applications
                        with external services and data sources. Whether it's integrating
                        third-party APIs, building custom APIs, or working with REST,
                        GraphQL, or WebSocket protocols, I ensure smooth data flow and
                        communication between systems. I focus on optimizing API
                        performance, ensuring security, and handling complex data
                        structures, so your applications can function efficiently and
                        reliably. Whatever your integration needs, I’m confident we can
                        implement a solution that fits your project goals.
                    </p>

                    <p>
                        I've prepared a quick example of components similar to those I've
                        developed in the past. The requests are secure and fast, with
                        responses efficiently cached for quicker retrieval, ensuring a
                        seamless user experience.
                    </p>

                    <p>
                        For instance, if you want to retrieve all the details about the next
                        Major League Soccer match:
                    </p>
                </article>
            </section>

            <section className="py-8">
                <header>
                    <h3 className="text-3xl font-semibold">Sports API Dashboard</h3>
                </header>

                <section className="grid gap-2">
                    <section className="rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Match details</h2>
                        </header>
                        <section className="p-2 rounded-md border border-zinc-700">
                            <Suspense fallback={<MatchDetailsLoader />}>
                                <MatchDetails />
                            </Suspense>
                        </section>
                    </section>

                    <section className="rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Teams comparison</h2>
                        </header>

                        <section className="p-2 rounded-md border border-zinc-700">
                            <Suspense fallback={<TeamsComparisonLoader />}>
                                <TeamsComparison />
                            </Suspense>
                        </section>
                    </section>

                    <section className="rounded-md">
                        <header className="flex gap-2 py-4 text-2xl font-semibold">
                            <h2 className="">Predictions provided by:</h2>
                            <a
                                href="https://api-sports.io/"
                                className="text-orange-600 hover:underline"
                            >
                                API Sports
                            </a>
                        </header>

                        <section className="p-2 rounded-md border border-zinc-700">
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
