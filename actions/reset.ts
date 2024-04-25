"use server";

import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordToken } from "@/lib/token";
import { ResetPasswordSchema } from "@/schemas";



export const reset = async (values: z.infer<typeof ResetPasswordSchema>) => 
{
    const validateFields = ResetPasswordSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid email!" };
    }
    const { email } = validateFields.data;
    
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
        return{ error: "Email not found" };
    }

    const passwordResetToken = await generatePasswordToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return { success: "Reset Email sent!" };

}