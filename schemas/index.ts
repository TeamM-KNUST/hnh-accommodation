import * as z from "zod";

export const ResetPasswordSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	
});

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 character long" }),
	confirmpassword: z
		.string()
		.min(6, { message: "Password must be at least 6 character long" }),
	name: z.string().min(6, { message: "Name is required" }),
});
export const NewPasswordSchema = z.object({
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 character long" }),
	confirmpassword: z
		.string()
		.min(6, { message: "Password must be at least 6 character long" }),
});

