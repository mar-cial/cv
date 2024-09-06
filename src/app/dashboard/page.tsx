import { Redis } from "@upstash/redis";
import { auth } from "../auth";
import { Suspense } from "react";
import { Session } from "next-auth";
import PerformanceContainer from "@/components/user/performance-container";
import Image from "next/image";

function UserDetailsLoader() {
    return (
        <section className="grid grid-cols-4 p-2 my-6 rounded-md bg-zinc-800">
            <section className="flex justify-center items-center p-2">
                <div className="w-5/6 h-auto rounded-full aspect-square bg-zinc-700"></div>
            </section>
            <section className="col-span-3 p-2">
                <section>
                    <h3 className="text-xs uppercase text-zinc-300">Username</h3>
                    <p className="text-lg">Not logged in</p>
                </section>

                <section>
                    <div className="text-xs uppercase text-zinc-300">Score</div>
                    <div className="text-lg">-</div>
                </section>
            </section>
        </section>
    );
}

function UserDetailsPulic() {
    return (
        <section className="grid grid-cols-4 p-2 my-6 rounded-md bg-zinc-800">
            <section className="flex justify-center items-center p-2">
                <div className="w-5/6 h-auto rounded-full aspect-square bg-zinc-700"></div>
            </section>
            <section className="col-span-3 p-2">
                <section>
                    <h3 className="text-xs uppercase text-zinc-300">Username</h3>
                    <p className="text-lg">Not logged in</p>
                </section>

                <section>
                    <div className="text-xs uppercase text-zinc-300">Score</div>
                    <div className="text-lg">-</div>
                </section>
            </section>
        </section>
    );
}

async function UserDetails() {
    const session = await auth();
    if (!session) {
        return <UserDetailsPulic />;
    }

    const redis = Redis.fromEnv();

    const response: string | null = await redis.get(
        `user:${session.user?.id}:username`,
    );

    return (
        <section className="grid grid-cols-4 p-2 my-6 rounded-md bg-zinc-800">
            <section className="flex justify-center items-center p-2">
                <Image
                    src={session.user?.image || ""}
                    alt="user image"
                    width={100}
                    height={100}
                    className="object-cover rounded-full"
                />
            </section>
            <section className="col-span-3 p-2">
                <section>
                    <h3 className="text-xs uppercase text-zinc-300">Username</h3>
                    <p className="text-lg">{`${response || "error"}`}</p>
                </section>

                <section>
                    <div className="text-xs uppercase text-zinc-300">Score</div>
                    <div className="text-lg">-</div>
                </section>
            </section>
        </section>
    );
}

async function getUserScore({
    session,
    redis,
}: {
    session: Session;
    redis: Redis;
}) {
    const score = await redis.get(`user:${session.user?.id}:score`);
    return score;
}

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
            </section>

            <section>
                <Suspense fallback={<UserDetailsLoader />}>
                    <UserDetails />
                </Suspense>
            </section>

            <section className="p-2 rounded-md bg-zinc-800">
                <header className="p-2 text-xl font-semibold">Performance</header>
                <PerformanceContainer />
            </section>
        </main>
    );
}
