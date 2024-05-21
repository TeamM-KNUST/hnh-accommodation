"use client";
import getCurrentUser from "@/actions/getCurrentUser";
import { Button } from "@/components/ui/button";
import { usePopoverModal } from "@/hooks/use-popover-modal";
import { signOut } from "next-auth/react";
import { AvatarImg } from "./avatarImage";

export const UserMenu = () => {
	const currentUser = getCurrentUser();
	const { onOpen } = usePopoverModal();
	console.log(onOpen);

	return (
		<div className="relative">
			{currentUser ? (
				<AvatarImg
					alt="user profile image"
					className="cursor-pointer"
					onClick={onOpen}
					
				/>
			) : (
				<div className="flex item-center justify-between gap-4 ">
					<Button className="text-sm font-semibold" variant="outline" size="lg">
						Login
					</Button>

					<Button
						className="text-sm font-semibold bg-blue-800 "
						size="lg"
						onClick={() => signOut()}
					>
						Sign Up
					</Button>
				</div>
			)}
		</div>
	);
};
