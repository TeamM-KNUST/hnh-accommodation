"use client";

import { usePopoverModal } from "@/hooks/use-popover-modal";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { Popover, PopoverContent } from "../ui/popover";

export const UserPopover = () => {
	const { isOpen, onClose, onOpen } = usePopoverModal();

	const handleClick = () => {
		if (isOpen) {
			onOpen();
        } else {
			onClose();
		}
	};

	return (
		<Popover open={isOpen} >
			<PopoverContent>
				<Button
					className="text-sm font-semibold bg-blue-800 "
					size="lg"
					onClick={() => signOut()}
				>
					Sign Up
				</Button>
			</PopoverContent>
		</Popover>
	);
};
