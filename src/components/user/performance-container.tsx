import { auth } from "@/app/auth";
import PerformanceChart from "./performance-chart";
import { Redis } from "@upstash/redis";
import { Session } from "next-auth";

export type Data = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
};

export type SessionRedis = {
    session: Session;
    redis: Redis;
};

export async function getUserData({
    session,
    redis,
}: SessionRedis): Promise<Data[] | null> {
    const key = `user:${session.user?.id}:data`;

    const response: Data[] | null = await redis.get(key);
    return response;
}

export default async function PerformanceContainer() {
    const session = await auth();
    if (!session) {
        return <section>no session</section>;
    }

    const redis = Redis.fromEnv();

    const data = await getUserData({ session, redis });
    if (!data) {
        return <div>error</div>;
    }

    return (
        <section>
            <PerformanceChart data={data} />
        </section>
    );
}
