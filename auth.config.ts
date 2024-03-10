import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas";

export default {
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);
				if (!validatedFields.success) {
					return null;
				}
				const { email, password } = validatedFields.data;
				const user = await getUserByEmail(email);
				if (!user || !user.password) {
					return null;
				}
				const passwordMatch = await bcrypt.compare(password, user.password);
				if (!passwordMatch) {
					return null;
				}
				return user
			},
		}),
	],
} satisfies NextAuthConfig;
