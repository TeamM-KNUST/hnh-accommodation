"use server";

import { ResetPasswordSchema } from "@/schemas";
import * as z from "zod";


export const reset = async (values: z.infer<typeof ResetPasswordSchema>) => 
{
    const validateFields = ResetPasswordSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }
    
    //TODO: Send email with reset link


    return { success: "Password reset link sent" };

}