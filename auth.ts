import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { getUserById } from "./data/user";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	callbacks: {
		async jwt({ token }) {
			if (!token) return token;
			if (token && token.sub) {
				const existingUser = await getUserById(token.sub);
				if (!existingUser) return token;
			}
			return token;
		},
	},

	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
