"use server";

import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { generatePasswordToken } from "@/lib/token";
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

	const existingToken = await generatePasswordToken(token);
	if (!existingToken) {
		return { error: "Invalid token!" };
	}

	const hasExpired = new Date() > new Date(existingToken.expires);
	if (hasExpired) {
		return { error: "Token has expired!" };
	}

	const exitingUser = await getUserByEmail(existingToken.email);
	if (!exitingUser) {
		return { error: "Email does not exist!" };
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const hashedConfirmPassword = await bcrypt.hash(confirmpassword, 10);

	if (password !== confirmpassword) {
		return {
			error: "Password Mismatch!",
		};
	}

	await db.user.update({
		where: { email: existingToken.email },
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
