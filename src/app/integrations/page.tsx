import { Suspense } from "react";
import {
    GameTeamsComparison,
    GameTeamsComparisonLoader,
    TeamsComparison,
    TeamsComparisonLoader,
} from "./comparison";
import { GamePredictions, GamePredictionsLoader } from "./predictions";
import {
    GameInformation,
    GameInformationLoader,
    MatchDetails,
    MatchDetailsLoader,
} from "./information";
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
