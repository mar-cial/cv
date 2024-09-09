import PageHeader from "@/components/user/page-header";
import { Performance } from "./performance";
import { IncomeAndExpense } from "./income-and-expense";
import SankeyGraph from "./sankey";

export default function Page() {
    return (
        <main>
            <PageHeader title={"Dashboard"} />

            <section>
                <p>
                    Hay un monton de escenarios en donde un entrepeneur desee darle
                    oportunidad a las personas de crear un usuario.
                </p>
            </section>

            <section>
                <section className="py-6">
                    <section className="flex justify-center items-center p-2">
                        <div className="p-4 bg-orange-600 rounded-full">
                            <span className="font-mono text-4xl font-bold">b.</span>
                        </div>
                    </section>

                    <section className="p-2 text-center">
                        <section>
                            <h3 className="text-xs uppercase">Username</h3>
                            <p className="text-lg">Cesar</p>
                        </section>
                    </section>

                    <section>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium officiis dolorem harum enim. Quibusdam rerum alias
                            debitis. Non, saepe odit quod quidem accusamus error alias quae
                            deleniti ducimus, sunt sequi.
                        </p>
                    </section>
                </section>

                <article>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
                        soluta praesentium eius amet quos dolores, asperiores itaque est,
                        fugit dignissimos veniam facere quasi fuga obcaecati dolor, ea magni
                        perferendis omnis?
                    </p>
                </article>
            </section>

            <section className="flex flex-col gap-4">
                <section>
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">
                            Performance graphs for health, analytics, generic tracking of any
                            kind
                        </h2>
                    </header>
                    <article>
                        <Performance />
                    </article>
                </section>

                <section>
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">
                            Income and outcome graphs for finance applications
                        </h2>
                    </header>
                    <article>
                        <IncomeAndExpense />
                    </article>
                </section>

                <section>
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">Even Sankey graphs</h2>
                    </header>
                    <article>
                        <SankeyGraph />
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
