"use server";

import bcrypt from "bcrypt";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const regiser = async (data: z.infer<typeof RegisterSchema>) => {
	const validateFields = RegisterSchema.safeParse(data);

	if (!validateFields.success) {
		return validateFields.error;
	}
	const { email, password, name, confirmpassword } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConfirmPassword = await bcrypt.hash(confirmpassword, 10);

	const existingUser = await db.user.findFirst({
		where: {
			email,
		},
	});
	if (existingUser) {
		return {
			error: "User already exists",
		};
	}

    if(password !== confirmpassword){
        return {
            error: "Password mismatch!"
        }
    }

	await db.user.create({
		data: {
			email,
			name,
            password: hashedPassword,
            confirmPassword:hashedConfirmPassword
		},
	});

	return {
		success: "User created successfully!",
	};
};
