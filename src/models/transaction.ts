import { SessionRedis } from "@/components/user/performance-container";
import { randomUUID } from "crypto";

export type Transaction = {
    id: string;
    event: string;
    type: string;
    date: string;
    amount: number;
    business: string;
};

export async function getUserTransactions({
    session,
    redis,
}: SessionRedis): Promise<Transaction[]> {
    const key = `user:${session.user?.id}:transactions`;

    const response: Transaction[] = await redis.lrange(key, 0, 100);
    if (response.length === 0 || !response) {
        return [];
    }

    return response;
}
export function generateRandomTransaction(): Transaction {
    const events = [
        { event: "withdrawal", type: "expense" },
        { event: "deposit", type: "income" },
        { event: "payment", type: "expense" },
        { event: "transfer", type: "income" }, // Transfer can be income
        { event: "transfer", type: "expense" }, // Transfer can also be expense
    ];

    const businesses = ["Amazon", "Walmart", "Target", "Best Buy", "Starbucks"];

    function getRandomElement<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateRandomDate(): string {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const randomDate = new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime()),
        );
        return randomDate.toISOString().split("T")[0];
    }

    function generateRandomAmount(): number {
        return +(Math.random() * 1000).toFixed(2); // Random amount between 0 and 1000, with 2 decimal places
    }

    const randomEvent = getRandomElement(events);

    return {
        id: randomUUID(),
        event: randomEvent.event,
        type: randomEvent.type,
        date: generateRandomDate(),
        amount: generateRandomAmount(),
        business: getRandomElement(businesses),
    };
}

export async function insertTestTransactions({ session, redis }: SessionRedis) {
    const key = `user:${session.user?.id}:transactions`;

    for (let i = 0; i < 10; i++) {
        const randomTransaction = generateRandomTransaction();
        const response = await redis.lpush(key, randomTransaction);
        console.log(response);
    }
}
