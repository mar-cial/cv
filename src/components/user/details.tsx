import { auth } from "@/app/auth";
import { Redis } from "@upstash/redis";
import Image from "next/image";
import { SessionRedis } from "./performance-container";

export function UserDetailsLoader() {
    return (
        <section className="p-2 rounded-md">
            <section className="flex justify-center items-center p-2">
                <div className="w-1/4 h-auto rounded-full aspect-square bg-zinc-700" />
            </section>
            <section className="p-2 text-center">
                <section>
                    <h3 className="text-xs uppercase text-zinc-300">Username</h3>
                    <p className="text-lg">-</p>
                </section>

                <section>
                    <div className="text-xs uppercase text-zinc-300">Score</div>
                    <div className="text-lg">-</div>
                </section>
            </section>
        </section>
    );
}

export async function getUsername({ session, redis }: SessionRedis) { }

export async function UserDetailsPublic() {
    return (
        <section className="p-2 rounded-md">
            <section className="flex justify-center items-center p-2">
                <div className="w-1/4 h-auto rounded-full aspect-square bg-zinc-700" />
            </section>
            <section className="p-2 text-center">
                <section>
                    <h3 className="text-xs uppercase text-zinc-300">Username</h3>
                    <p className="text-lg">Random user</p>
                </section>

                <section>
                    <div className="text-xs uppercase text-zinc-300">Score</div>
                    <div className="text-lg">1200</div>
                </section>
            </section>
        </section>
    );
}

function UsernameLoader() {
    return <p></p>;
}

async function getUsername({ session, redis }: SessionRedis) {
    const username: string | null = await redis.get(
        `user:${session.user?.id}:username`,
    );

    return username;
}

async function Username({ session, redis }: SessionRedis) {
    const username: string | null = await redis.get(
        `user:${session.user?.id}:username`,
    );

    return <p>{username}</p>;
}

export async function UserDetails() {
    const session = await auth();
    if (!session) {
        return <UserDetailsPublic />;
    }

    const redis = Redis.fromEnv();

    const response: string | null = await redis.get(
        `user:${session.user?.id}:username`,
    );

    return (
        <section className="p-2 rounded-md">
            <section className="flex justify-center items-center p-2">
                <Image
                    src={session.user?.image || ""}
                    alt="user image"
                    width={100}
                    height={100}
                    className="w-1/4 h-auto rounded-full aspect-square bg-zinc-700"
                />
            </section>
            <section className="p-2 text-center">
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
