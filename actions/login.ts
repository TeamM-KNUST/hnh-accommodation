"use server"

import * as z from "zod"
import { LoginSchema } from "@/schemas"

export const login = async (data: z.infer<typeof LoginSchema>) => {
    console.log("login", data)  

}
    