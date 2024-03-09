import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
	return new PrismaClient();
};

declare global {
	var prisma: undefined | ReturnType<typeof PrismaClientSingleton>;
}

export const db = global.prisma || PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
	global.prisma = db;
}
