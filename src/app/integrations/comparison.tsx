import { Fixtures } from "@/models/fixtures";
import { PredictionsData } from "@/models/predictions";
import { apiCall } from "@/utils/api";
import { ComparisionChart } from "./radial-chart";

export function TeamsComparisonLoader() {
    return <section>Loader</section>;
}

export async function TeamsComparison() {
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

    const { teams, comparison } = predictions_data.response[0];

    return (
        <section>
            <ComparisionChart
                comparison={comparison}
                home={teams.home.name}
                away={teams.away.name}
            />
        </section>
    );
}
