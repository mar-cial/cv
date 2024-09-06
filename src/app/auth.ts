import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { Redis } from "@upstash/redis";
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const redis = Redis.fromEnv();

const config: NextAuthConfig = {
    adapter: UpstashRedisAdapter(redis),
    providers: [Google],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
