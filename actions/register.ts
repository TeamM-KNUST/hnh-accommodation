"use server";

import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";	
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validateFields = RegisterSchema.safeParse(values);

	if (!validateFields.success) {
		return validateFields.error;
	}
	const { email, password, name, confirmpassword } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	const hashedConfirmPassword = await bcrypt.hash(confirmpassword, 10);

	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return {
			error: "User already exists!",
		};
	}

	if (password !== confirmpassword) {
		return {
			error: "Password mismatch!",
		};
	}

	await db.user.create({
		data: {
			email,
			name,
			password: hashedPassword,
			confirmPassword: hashedConfirmPassword,
		},
	});
	const verificationToken = await generateVerificationToken(email);
	await sendVerificationEmail(verificationToken.email, verificationToken.token);

	return {
		success: "Confirmation email sent!",
	};
};
