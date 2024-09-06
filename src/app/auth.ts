import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { Redis } from "@upstash/redis";
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const redis = Redis.fromEnv();

const config: NextAuthConfig = {
    adapter: UpstashRedisAdapter(redis),
    providers: [Google],
    events: {
        async createUser({ user }) {
            const key = `user:${user.id}:username`;
            const randomNumber = Math.floor(Math.random() * 10000);
            const paddedRN = randomNumber.toString().padStart(4, "0");
            const randomUsername = `${user.email?.slice(0, 4).replace("@", "A")}${paddedRN}`;

            await redis.set(key, randomUsername);
        },
    },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
