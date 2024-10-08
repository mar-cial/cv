import { Form } from "@/components/form";
import { Fixtures } from "@/models/fixtures";
import { PredictionsData } from "@/models/predictions";
import { apiCall } from "@/utils/api";
import Image from "next/image";

export function GamePredictionsLoader() {
    return (
        <section className="p-2 border border-black">
            <div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <div className="w-12 h-12 rounded-full bg-zinc-300"></div>
                        </div>

                        <div>Loading</div>
                    </div>

                    <div>
                        <div>
                            <div className="w-12 h-12 rounded-full bg-zinc-300"></div>
                        </div>

                        <div>Loading</div>
                    </div>
                </div>
            </div>

            <div className="py-2 bg-red-200">
                <div className="text-center">Goals</div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>-</p>
                    </div>
                    <div className="text-center">
                        <p>-</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <div>Probable winner</div>
                    <div>Probable outcome</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>-</p>
                    </div>
                    <div className="text-center">
                        <p>-</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center">Advice</div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>-</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center">Probable outcome</div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <div>Home win</div>
                        <div>
                            <p>-</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>Draw</div>
                        <div>
                            <p>-</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div>Away win</div>
                        <div>
                            <p>-</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <div>Under/over?</div>
                    <div>Win or draw?</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>-</p>
                    </div>
                    <div className="text-center">
                        <p>-</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export async function GamePredictions() {
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

    const { predictions, teams } = predictions_data.response[0];

    return (
        <section className="flex flex-col divide-y divide-zinc-700">
            <div className="py-2">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div>
                            <Image
                                src={teams.home.logo}
                                alt="home team logo"
                                width={200}
                                height={200}
                                className="w-16 h-auto"
                            />
                        </div>

                        <div className="font-bold text-center">{teams.home.name}</div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div>
                            <Image
                                src={teams.away.logo}
                                alt="away team logo"
                                width={200}
                                height={200}
                                className="w-16 h-auto"
                            />
                        </div>

                        <div className="font-bold text-center">{teams.away.name}</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 py-2">
                <div className="text-xl font-medium text-center">
                    Form - last 5 games
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex justify-center">
                        <div className="flex gap-1">
                            <Form form={teams.home.league.form} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex gap-1">
                            <Form form={teams.away.league.form} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="text-xl font-medium text-center">Goals</div>
                <div className="grid grid-cols-2">
                    <div className="text-center">
                        <p className="text-xl font-semibold">{predictions.goals.home}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold">{predictions.goals.away}</p>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="flex justify-between">
                    <div className="font-semibold">Probable winner</div>
                    <div className="font-semibold">Probable outcome</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>{predictions.winner.name}</p>
                    </div>
                    <div className="text-center">
                        <p>{predictions.winner.comment}</p>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="font-semibold text-center">Advice</div>
                <div className="text-center">
                    <p>{predictions.advice}</p>
                </div>
            </div>

            <div className="py-2">
                <div className="font-semibold text-center">Probable outcome</div>

                <div className="grid grid-cols-3 divide-x divide-zinc-700">
                    <div className="text-center">
                        <div className="font-medium">Home win</div>
                        <div>
                            <p>{predictions.percent.home}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="font-medium">Draw</div>
                        <div>
                            <p>{predictions.percent.draw}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="font-medium">Away win</div>
                        <div>
                            <p>{predictions.percent.away}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="flex justify-between">
                    <div className="font-semibold">Under/over?</div>
                    <div className="font-semibold">Win or draw?</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>{predictions.under_over || "-"}</p>
                    </div>
                    <div className="text-center">
                        <p>{predictions.win_or_draw ? "yes" : "no"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
