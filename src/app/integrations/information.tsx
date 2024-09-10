import { Fixtures } from "@/models/fixtures";
import { apiCall } from "@/utils/api";
import Image from "next/image";

export function GameInformationLoader() {
    return (
        <section>
            <section className="pb-4">
                <section className="flex gap-2 items-center">
                    <div className="w-14 h-14 rounded-full bg-zinc-900"></div>
                    <div className="w-14 h-14 rounded-full bg-zinc-900"></div>
                </section>

                <header>
                    <h3 className="text-2xl font-semibold">Loading</h3>
                    <p>Match date: -</p>
                </header>
            </section>

            <section className="">
                <header>
                    <h2 className="text-lg font-semibold uppercase">Match details</h2>
                </header>

                <section className="divide-y divide-zinc-600">
                    <div className="flex justify-between">
                        <div>Match status</div>
                        <div className="text-right">-</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Venue</div>
                        <div className="text-right">-</div>
                    </div>

                    <div className="flex justify-between">
                        <div>League name</div>
                        <div className="text-right">-</div>
                    </div>

                    <div className="flex justify-between">
                        <div>Season</div>
                        <div className="text-right">-</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Country</div>
                        <div className="text-right">-</div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export async function GameInformation() {
    const endpoint = "/fixtures";
    const response = await apiCall({
        endpoint,
        params: { league: "253", next: "1", timezone: "America/Los_Angeles" },
    });

    if (!response.ok) {
        return <section>err</section>;
    }

    const fixtures: Fixtures = await response.json();
    if (!fixtures) {
        return <section>Fixtures error</section>;
    }

    const { fixture, teams, league } = fixtures.response[0];

    const f_date =
        fixture.date.slice(0, fixture.date.toString().indexOf("T")) || "-";

    return (
        <section className="border border-black">
            <section className="pb-4">
                <section className="flex gap-2 items-center">
                    <Image
                        width={200}
                        height={200}
                        src={teams.home.logo}
                        alt="Home team logo"
                        className="w-14"
                    />
                    <Image
                        width={200}
                        height={200}
                        src={teams.away.logo}
                        alt="Away team logo"
                        className="w-14"
                    />
                </section>

                <header>
                    <h3 className="text-2xl font-semibold">{`${teams.home.name} vs. ${teams.away.name}`}</h3>
                    <p>Match date: {f_date}</p>
                </header>
            </section>

            <section>
                <section className="divide-y divide-zinc-600">
                    <div className="flex justify-between py-1">
                        <div>Match status</div>
                        <div className="text-right">{fixture.status.long}</div>
                    </div>
                    <div className="flex justify-between py-1">
                        <div>Venue</div>
                        <div className="text-right">{fixture.venue.name}</div>
                    </div>

                    <div className="flex justify-between py-1">
                        <div>League name</div>
                        <div className="text-right">{league.name}</div>
                    </div>

                    <div className="flex justify-between py-1">
                        <div>Season</div>
                        <div className="text-right">{league.season}</div>
                    </div>
                    <div className="flex justify-between pt-1">
                        <div>Country</div>
                        <div className="text-right">{league.country}</div>
                    </div>
                </section>
            </section>
        </section>
    );
}
