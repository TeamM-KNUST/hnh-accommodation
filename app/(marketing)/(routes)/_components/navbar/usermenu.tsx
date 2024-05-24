"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export const UserMenu = () => {
	const router = useRouter();

	return (
		<div className="relative">
		
				<div className="flex item-center justify-between gap-4 ">
				<Button className="text-sm font-semibold" variant="outline" size="lg"
					onClick={() => router.push("auth/login")}
				>
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
		
		</div>
	);
};
