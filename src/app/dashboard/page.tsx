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
