import { UserDetails, UserDetailsLoader } from "@/components/user/details";
import PageHeader from "@/components/user/page-header";
import PerformanceContainer from "@/components/user/performance-container";
import TransactionsContainer from "@/components/user/transactions-container";
import { Suspense } from "react";
import { Performance } from "./performance";
import { IncomeAndExpense } from "./income-and-expense";

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
                        <h2 className="text-xl font-semibold">Performance</h2>
                    </header>
                    <article>
                        <Performance />
                    </article>
                </section>

                <section>
                    <header className="p-2 text-xl font-semibold">
                        <h2 className="text-xl font-semibold">Income and outcome</h2>
                    </header>
                    <article>
                        <IncomeAndExpense />
                    </article>
                </section>
            </section>

            <section className="my-4">
                <header className="">
                    <h2 className="text-2xl font-semibold">
                        Give transparency to your users with responsive and dynamic graphs.
                    </h2>
                </header>

                <article>
                    <p>
                        I can integrate your API's to display a custom, interactive and
                        dynamic graphs. Bank transactions, performance, any data that can be
                        tracked we can display in a graph.
                    </p>
                </article>
            </section>
        </main>
    );
}
