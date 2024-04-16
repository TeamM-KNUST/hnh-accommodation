import { db } from "@/lib/db";

export const getVericationTokenByToken = async (token: string) => {
	try {
		const verificationToken = await db.verificationToken.findUnique({
			where: {
				token,
			},
		});
	} catch {
		return null;
	}
};

export const getVericationTokenByEmail = async (email: string) => {
	try {
		const verificationToken = await db.verificationToken.findFirst({
			where: {
				email,
			},
		});
	} catch {
		return null;
	}
};
