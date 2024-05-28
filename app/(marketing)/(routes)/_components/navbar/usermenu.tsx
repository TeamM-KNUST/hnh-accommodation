"use client";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { usePopoverModal } from "@/hooks/use-popover-modal";
import { useRouter } from "next/navigation";
import { AvatarImg } from "./avatarImage";
import getCurrentUser from "@/actions/getCurrentUser";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

export const UserMenu = () => {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect
		(() => {
			const fetchUser = async () => {
				const user = await getCurrentUser();
				setCurrentUser(user);
			};
			fetchUser();
		}, []);

	return (
		<div className="relative">
			<div className="flex item-center justify-end gap-2 ">
				{/* <div className="flex items-center justify-center w-auto shadow-lg rounded-full px-6 cursor-pointer hover:bg-blue-800 hover:text-white h-12">
					List your property
				</div> */}
				{!currentUser ? (
					<>
						<Button
							className="text-sm font-semibold"
							variant="outline"
							size="lg"
							onClick={() => router.push("auth/login")}
						>
							Login
						</Button>

						<Button
							className="text-sm font-semibold bg-blue-800 "
							size="lg"
							onClick={() => router.push("auth/register")}
						>
							Sign Up
						</Button>
					</>
				) : (
					<div className="relative inline-flex items-center justify-center">
						<Popover>
							<PopoverTrigger asChild>
								<div className="cursor-pointer">
									<AvatarImg src={currentUser.image} alt="user" />
								</div>
							</PopoverTrigger>
							<PopoverContent>
								<div className="flex flex-col gap-2">
									<Button
										variant="outline"
										size="sm"
										onClick={() => router.push("auth/logout")}
									>
										Logout
									</Button>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				)}
			</div>
		</div>
	);
};
