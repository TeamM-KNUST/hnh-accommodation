"use server";

import bcrypt from "bcryptjs";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";

export const newPassword = async (
	values: z.infer<typeof NewPasswordSchema>,
	token?: string | null
) => {
	if (!token) {
		return { error: "Missing token!" };
	}
	const validateFields = NewPasswordSchema.safeParse(values);

	if (!validateFields.success) {
		return { error: "Invalid fields!" };
	}
	const { password, confirmpassword } = validateFields.data;

	const existingToken = await getPasswordResetTokenByToken(token);
	if (!existingToken) {
		return { error: "Invalid token!" };
	}

	const hasExpired = new Date() > new Date(existingToken.expires);
	if (hasExpired) {
		return { error: "Token has expired!" };
	}

	const existingUser = await getUserByEmail(existingToken.email);
	if (!existingUser) {
		return { error: "Email does not exist!" };
	}
	if (existingUser && existingUser.password) {
		const isSamePassword = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (isSamePassword) {
			return { error: "Cannot use old password!" };
		}
	}

	if (password !== confirmpassword) {
		return {
			error: "Password Mismatch!",
		};
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const hashedConfirmPassword = await bcrypt.hash(confirmpassword, 10);

	await db.user.update({
		where: { id: existingToken.id },
		data: {
			password: hashedPassword,
			confirmPassword: hashedConfirmPassword,
		},
	});

	await db.passwordResetToken.delete({
		where: { id: existingToken.id },
	});
	return {
		success: "Password Updated!",
	};
};
