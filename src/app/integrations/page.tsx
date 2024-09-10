import PageHeader from "@/components/user/page-header";
import { Suspense } from "react";
import { GameTeamsComparison, GameTeamsComparisonLoader } from "./comparison";
import { GamePredictions, GamePredictionsLoader } from "./predictions";
import { GameInformation, GameInformationLoader } from "./information";

export default function Page() {
    return (
        <main>
            <PageHeader title="API Integrations" />

            <section>
                <header>
                    <h2>We can work with any API you use for your business.</h2>
                </header>

                <article>
                    <p>
                        We prepared an example of what we can build based on an API. We are
                        using
                        <a
                            href="https://api-sports.io/"
                            className="text-orange-600 underline"
                        >
                            API-Sports
                        </a>
                        for this. It shows an analysis of the next game to happen in the
                        &quot;Major League Soccer&quot; (MLS) league. All data presented is
                        pulled directly from the API.
                    </p>
                </article>
            </section>

            <section>
                <header>
                    <h3 className="text-2xl font-semibold">Sports API Dashboard</h3>
                </header>

                <section className="grid gap-2 md:grid-cols-2">
                    <section className="rounded-md">
                        <header>
                            <h2 className="text-2xl font-semibold">Match details</h2>
                        </header>
                        <Suspense fallback={<GameInformationLoader />}>
                            <GameInformation />
                        </Suspense>
                    </section>

                    <section className="rounded-md">
                        <header>
                            <h2 className="text-2xl font-semibold">Teams comparison</h2>
                        </header>

                        <Suspense fallback={<GameTeamsComparisonLoader />}>
                            <GameTeamsComparison />
                        </Suspense>
                    </section>

                    <section className="rounded-md">
                        <header>
                            <h2 className="text-2xl font-semibold">
                                Predictions (provided by
                                <a
                                    href="https://api-sports.io/"
                                    className="text-orange-600 hover:underline"
                                >
                                    API Sports
                                </a>
                                )
                            </h2>
                        </header>

                        <Suspense fallback={<GamePredictionsLoader />}>
                            <GamePredictions />
                        </Suspense>
                    </section>
                </section>
            </section>
        </main>
    );
}
