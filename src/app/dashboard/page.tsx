import { Performance } from "./performance";
import { IncomeAndExpense } from "./income-and-expense";
import SankeyGraph from "./sankey";
import { Suspense } from "react";
import { HistoricChart } from "./historic";
import { historicData } from "@/data/historic";
import { ScatterCharting } from "./scatter";
import { scatterData } from "@/data/scatter";
import { performanceData } from "@/data/performance";
import PageHeader from "@/components/page-header";

export default function Page() {
    return (
        <main>
            <PageHeader title="Custom dashboards" />

            <section className="flex flex-col gap-2">
                <p>
                    I’ve prepared a few sample graphs that I’ve created for clients. While
                    the design and implementation of graphs are straightforward, the real
                    challenge lies in identifying the right data to extract and present.
                    Together, we can tackle this challenge, ensuring you have a clear,
                    insightful view of all your important information.
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
                <article>
                    <Suspense fallback={<div>Loading</div>}>
                        <IncomeAndExpense />
                    </Suspense>
                </article>

                <article>
                    <Suspense fallback={<div>Loading</div>}>
                        <SankeyGraph />
                    </Suspense>
                </article>
            </section>
        </main>
    );
}
