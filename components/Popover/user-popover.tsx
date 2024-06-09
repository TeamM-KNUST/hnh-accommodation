"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { usePopoverModal } from "@/hooks/usepopover";

interface UserPopoverProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  onClick?: () => void;
}

export const UserPopover = ({
  children,
  trigger,
  onClick,
}: UserPopoverProps) => {
  const { isOpen, onClose, onOpen } = usePopoverModal();

  const handleClick = () => {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={onClose}>
      <PopoverTrigger asChild onClick={onClick}>
        <div onClick={handleClick}>{trigger}</div>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
