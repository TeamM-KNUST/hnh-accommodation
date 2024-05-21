"use client";


import { useSession } from "next-auth/react";
import { AvatarImg } from "./avatarImage";

export const UserMenu = () => {
	const { data: session } = useSession();
	return (
		<div className="relative">
			<AvatarImg src={session?.user?.image} />
		</div>
	);
};
