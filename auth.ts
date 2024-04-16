import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";


declare module "next-auth" {
	interface User{
		role: UserRole
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,	
	signOut,
} = NextAuth({
	events: {
		async linkAccount({user}){
			await db.user.update({
				where:{id:user.id},
				data:{emailVerified: new Date()}
			})

		}
	},
	callbacks: {
		async session({ session, token, user }) {
			
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			console.log({ session, sessionToken: token })
			if (token.role && session.user) {
				session.user.role = token.role as UserRole
			}

			return {
				...session,
				user: {
					...session.user,
					role: token.role as UserRole
				},
			}
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);
			if (!existingUser) return token;
			
			token.role = existingUser.role;
		
			
			return token
		}
	
		
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
