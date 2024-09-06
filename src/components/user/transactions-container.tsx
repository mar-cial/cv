import { auth } from "@/app/auth";
import { Redis } from "@upstash/redis";
import { TransactionPie } from "./transaction-pie";
import { getUserTransactions } from "@/models/transaction";

export default async function TransactionsContainer() {
    const session = await auth();
    if (!session) {
        return <section>no session</section>;
    }

    const redis = Redis.fromEnv();

    const transactions = await getUserTransactions({ session, redis });

    return (
        <section>
            <TransactionPie transactions={transactions} type="income" />
        </section>
    );
}
