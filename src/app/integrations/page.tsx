import {
    GameInformation,
    GameInformationLoader,
} from "@/components/game-information";
import PageHeader from "@/components/user/page-header";
import { Fixtures } from "@/models/fixtures";
import { PredictionsData } from "@/models/predictions";
import { apiCall } from "@/utils/api";
import { Suspense } from "react";
import { ComparisionChart } from "./radial-chart";

export default function Page() {
    return (
        <main>
            <PageHeader title="API Integrations" />

            <section>
                <header>
                    <h2>We can work with any API you use for your business.</h2>
                </header>

                <article>
                    <p></p>
                </article>
            </section>

            <section>
                <header>
                    <h2>Check out what can be done:</h2>
                </header>
            </section>

            <section>
                <header>
                    <h3 className="text-2xl font-semibold">Sports API Dashboard</h3>
                </header>

                <section className="grid gap-2 py-8 md:grid-cols-2">
                    <section className="p-4 rounded-md bg-zinc-800">
                        <Suspense fallback={<GameInformationLoader />}>
                            <GameInformation />
                        </Suspense>
                    </section>

                    <section className="p-4 rounded-md bg-zinc-800">
                        <Suspense fallback={<GamePredictionsLoader />}>
                            <GamePredictions />
                        </Suspense>
                    </section>
                </section>
            </section>
        </main>
    );
}

function GamePredictionsLoader() {
    return <section>Loader</section>;
}

async function GamePredictions() {
    const fixtures_endpoint = "/fixtures";

    const fixtures_response = await apiCall({
        endpoint: fixtures_endpoint,
        params: { league: "253", next: "1", timezone: "America/Los_Angeles" },
    });

    if (!fixtures_response.ok) {
        return <section>err</section>;
    }

    const fixtures: Fixtures = await fixtures_response.json();
    if (!fixtures) {
        return <section>error</section>;
    }

    const fixture_id = fixtures.response[0].fixture.id;
    if (!fixture_id) {
        return <section>error</section>;
    }

    const predictions_endpoint = "/predictions";

    const predictions_response = await apiCall({
        endpoint: predictions_endpoint,
        params: { fixture: fixture_id },
    });

    if (!predictions_response.ok) {
        return <section>error</section>;
    }

    const predictions_data: PredictionsData = await predictions_response.json();
    if (!predictions_data) {
        return <section>error</section>;
    }

    const { predictions, league, teams, comparison, h2h } =
        predictions_data.response[0];

    return (
        <ComparisionChart
            comparison={comparison}
            home={teams.home.name}
            away={teams.away.name}
        />
    );
}
