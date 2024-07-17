import { UserRole, RoomCount, RoomType } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
    isOAuth: boolean;
    capacity: RoomCount;
    type: RoomType;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
