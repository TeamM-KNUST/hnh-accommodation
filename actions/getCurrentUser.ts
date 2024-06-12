import { auth } from "@/auth";
import { db } from "@/lib/db";



export default async function getCurrentUser() {

		const session = await auth();

		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await db.user.findUnique({
			where: {
				email: session.user.email,
			},
		});
		return currentUser;
	
}
