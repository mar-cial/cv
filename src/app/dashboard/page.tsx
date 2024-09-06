import { UserDetails, UserDetailsLoader } from "@/components/user/details";
import PerformanceContainer from "@/components/user/performance-container";
import TransactionsContainer from "@/components/user/transactions-container";
import { Suspense } from "react";

export default function Page() {
    return (
        <main>
            <header>
                <h1 className="text-3xl font-semibold">Dashboard</h1>
            </header>

            <section>
                <p>I can create a fully customizable dashboard for your users.</p>
                <p>
                    Create an account with Google authentication to see what can be done.
                </p>
                <p className="text-orange-400">
                    The following data is fabricated and doesn't mean anything.
                </p>
            </section>

            <section>
                <Suspense fallback={<UserDetailsLoader />}>
                    <UserDetails />
                </Suspense>

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
                <section className="p-2 rounded-md bg-zinc-800">
                    <header className="p-2 text-xl font-semibold">Performance</header>

                    <Suspense
                        fallback={
                            <section className="flex justify-center items-center h-[200px]">
                                <div className="text-xl font-semibold">Loading</div>
                            </section>
                        }
                    >
                        <PerformanceContainer />
                    </Suspense>
                </section>

                <section className="p-2 rounded-md bg-zinc-800">
                    <header className="p-2 text-xl font-semibold">
                        Income/expense pie chart
                    </header>

                    <Suspense
                        fallback={
                            <section className="flex justify-center items-center h-[200px]">
                                <div className="text-xl font-semibold">Loading</div>
                            </section>
                        }
                    >
                        <TransactionsContainer />
                    </Suspense>
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
