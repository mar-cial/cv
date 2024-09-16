import PageHeader from "@/components/user/page-header";
import { Performance } from "./performance";
import { IncomeAndExpense } from "./income-and-expense";
import SankeyGraph from "./sankey";
import { Suspense } from "react";
import { HistoricChart } from "./historic";
import { historicData } from "@/data/historic";
import { ScatterCharting } from "./scatter";
import { scatterData } from "@/data/scatter";
import { performanceData } from "@/data/performance";

export default function Page() {
    return (
        <main>
            <PageHeader title="Custom dashboards" />

            <section>
                <p>
                    We can build any dashboard you need. We will analyze, extract and use
                    data to share information with clear, intuitive and responsive graphs.
                </p>
            </section>

            <section className="py-8">
                <Suspense fallback={<div>Loading</div>}>
                    <HistoricChart data={historicData} />
                </Suspense>
            </section>

            <section>
                <Suspense fallback={<div>Loading</div>}>
                    <Performance data={performanceData} />
                </Suspense>
            </section>

            <section>
                <Suspense fallback={<div>Loading</div>}>
                    <ScatterCharting data={scatterData} />
                </Suspense>
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
                <article className="bg-zinc-800">
                    <Suspense fallback={<div>Loading</div>}>
                        <IncomeAndExpense />
                    </Suspense>
                </article>

                <article className="bg-zinc-800">
                    <Suspense fallback={<div>Loading</div>}>
                        <SankeyGraph />
                    </Suspense>
                </article>
            </section>
        </main>
    );
}

function PageV1() {
    return (
        <main className="p-8 xl:p-12">
            <PageHeader title={"Dashboard"} />

            <section>
                <section>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic culpa
                        incidunt exercitationem quos earum labore dolor quae magni vitae
                        neque, fuga voluptate pariatur distinctio explicabo, perferendis
                        dolorum reprehenderit voluptatibus ipsum?
                    </div>
                </section>
            </section>

            <section>
                <header className="py-4">
                    <h2 className="text-2xl font-semibold">All your data at a glance.</h2>
                </header>
            </section>

            <section className="grid gap-4 lg:grid-cols-3">
                <section className="flex flex-col gap-4 p-2 rounded-md border">
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">
                            Performance graphs for health, analytics, generic tracking of any
                            kind
                        </h2>
                    </header>
                    <article>
                        <Suspense fallback={<div>Loading</div>}>
                            <Performance />
                        </Suspense>
                    </article>
                </section>

                <section className="p-2 rounded-md border">
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">
                            Income and outcome graphs for finance applications
                        </h2>
                    </header>
                    <article>
                        <Suspense fallback={<div>Loading</div>}>
                            <IncomeAndExpense />
                        </Suspense>
                    </article>
                </section>

                <section className="p-2 rounded-md border">
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">Even Sankey graphs</h2>
                    </header>
                    <article>
                        <Suspense fallback={<div>Loading</div>}>
                            <SankeyGraph />
                        </Suspense>
                    </article>
                </section>
            </section>

            <section>
                <header>
                    <h2 className="text-2xl font-semibold">
                        Create custom reports and graphs tailored to your users.
                    </h2>
                </header>

                <article>
                    <p>
                        I can integrate your APIs to display custom, interactive graphs for
                        any data, from bank transactions to performance metrics.
                    </p>
                </article>
            </section>
        </main>
    );
}
