import { auth } from "@/auth";
import { db } from "@/lib/db";

export default async function getCurrentUser() {
	const session = await auth();
  console.log("Session", session);
  
  if (!session || !session.user) {
    return null;
  }
	const currentUser = await db.user.findUnique({
		where: {
			email: session.user.email as string

		}
	})
  
  return currentUser;
}