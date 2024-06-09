"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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


  return (
    <Popover >
      <PopoverTrigger asChild onClick={onClick}>
        <div>{trigger}</div>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
