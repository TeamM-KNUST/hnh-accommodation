import { getVericationTokenByEmail } from "@/data/verification-token";
import { db } from "@/lib/db";
import {v4 as uuidv4} from "uuid";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

    const existingToken = await getVericationTokenByEmail(email);

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires,
        }
    }
    );
    return verificationToken;
}
