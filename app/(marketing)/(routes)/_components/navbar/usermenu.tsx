import { auth, signOut } from "@/auth";
import { UserPopover } from "@/components/Popover/user-popover";
import { Button } from "@/components/ui/button";
import { AvatarImg } from "./avatarImage";

export const UserMenu = async () => {
	const session = await auth();
	if (!session?.user) {
		return null;
	}
	return (
		<div className="relative">
			{session?.user ? (
				<>
					<AvatarImg  src={session?.user?.image}
					alt="user profile image"
					/>
				</>
			) : (
				<div className="flex item-center justify-between gap-4 ">
					<Button className="text-sm font-semibold" variant="outline" size="lg">
						Login
					</Button>
					<form
						action={async () => {
							"use server";
							await signOut();
						}}
					>
						<Button
							className="text-sm font-semibold bg-blue-800 "
							size="lg"
							type="submit"
						>
							Sign Up
						</Button>
					</form>
				</div>
			)}
		</div>
	);
};
