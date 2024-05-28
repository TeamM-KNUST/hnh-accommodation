"use client";

import { usePopoverModal } from "@/hooks/use-popover-modal";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "../ui/popover";

interface UserPopoverProps {
	children: React.ReactNode;
	trigger: React.ReactNode;
	onClick?: () => void;
}

export const UserPopover = ({ children, trigger , onClick}: UserPopoverProps) => {
	const { isOpen, onClose, onOpen } = usePopoverModal();

	const handleClick = () => {
		if (isOpen) {
			onOpen();
		} else {
			onClose();
		}
	};

	return (
		<Popover open={isOpen} onOpenChange={onClose} >
			<PopoverTrigger asChild onClick={onClick}>
				<div onClick={handleClick}>{trigger}</div>
			</PopoverTrigger>
			<PopoverContent >{children}</PopoverContent>
		</Popover>
	);
};
