
import { AvatarImg } from "./avatarImage";
import { auth } from "@/auth";

export const UserMenu = async () => {
    const session = await auth();
	return (
		<div className="relative">
			<AvatarImg src={session?.user?.image} alt="User Avatar"/>
		</div>
	);
};
