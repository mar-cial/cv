import { Suspense } from "react";
import { GameTeamsComparison, GameTeamsComparisonLoader } from "./comparison";
import { GamePredictions, GamePredictionsLoader } from "./predictions";
import { GameInformation, GameInformationLoader } from "./information";
import PageHeader from "@/components/page-header";

export default function Page() {
    return (
        <main>
            <PageHeader title="API Integrations" />

            <section>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                        voluptatibus autem nulla eaque cumque voluptatem laborum atque
                        adipisci! Cum autem ut mollitia aut. Accusamus aut necessitatibus,
                        autem recusandae tenetur iusto?
                    </p>
                </article>
            </section>

            <section className="py-8">
                <header>
                    <h3 className="text-2xl font-semibold">Sports API Dashboard</h3>
                </header>

                <section className="grid gap-2 md:grid-cols-2">
                    <section className="rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Match details</h2>
                        </header>
                        <section className="rounded-md lg:p-4 dark:bg-zinc-950">
                            <Suspense fallback={<GameInformationLoader />}>
                                <GameInformation />
                            </Suspense>
                        </section>
                    </section>

                    <section className="rounded-md">
                        <header className="py-4">
                            <h2 className="text-2xl font-semibold">Teams comparison</h2>
                        </header>

                        <section className="rounded-md border lg:p-4 dark:bg-zinc-950">
                            <Suspense fallback={<GameTeamsComparisonLoader />}>
                                <GameTeamsComparison />
                            </Suspense>
                        </section>
                    </section>

                    <section className="rounded-md">
                        <header className="py-4">
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

                        <section className="p-2 rounded-md border">
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
