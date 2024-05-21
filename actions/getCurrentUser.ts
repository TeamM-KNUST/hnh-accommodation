import { db } from "@/lib/db";
import { getSession } from "next-auth/react";

export default async function getCurrentUser() {
	try {
		const session = await getSession();
		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await db.user.findUnique({
			where: {
				email: session.user.email,
			},
		});

		if (!currentUser) {
			return null;
		}
	} catch (error: any) {
		return null;
	}
}
