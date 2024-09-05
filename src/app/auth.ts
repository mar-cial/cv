import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const config: NextAuthConfig = {
    providers: [Google],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
