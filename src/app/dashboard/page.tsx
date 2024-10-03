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

function Card({
    number,
    title,
    description,
}: {
    title: string;
    number: string;
    description: string;
}) {
    return (
        <article className="flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="flex justify-center items-center w-8 h-8 bg-orange-600 rounded-full aspect-square">
                    <div className="text-xl font-semibold">{number}</div>
                </div>
                <div className="flex-1">
                    <div className="text-2xl">{title}</div>
                </div>
            </div>

            <div>{description}</div>
        </article>
    );
}

export default function Page() {
    return (
        <main className="p-8">
            <PageHeader title="Custom dashboards" />

            <section className="flex flex-col gap-6 pb-12">
                <header>
                    <h2 className="text-xl">
                        We work with your data to generate clean, concise reports
                    </h2>
                </header>

                <section className="flex flex-col gap-8">
                    <Card
                        title="Data Clean-Up"
                        number="1"
                        description="We ensure your data is accurate and well-structured, eliminating unnecessary noise and redundancies."
                    />
                    <Card
                        title="Processing"
                        number="2"
                        description="Through advanced algorithms and workflows, we process your data to extract valuable insights."
                    />
                    <Card
                        title="Visualization"
                        number="3"
                        description="We transform complex data into digestible graphs and charts, making it easier to understand and use."
                    />
                    <Card
                        title="Custom Dashboards"
                        number="4"
                        description="Tailored to your needs, we create interactive dashboards that present real-time data with clarity and precision."
                    />
                </section>
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
