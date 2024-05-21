"use client";


import { usePopoverModal } from "@/hooks/use-popover-modal";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface UserPopoverProps {
    children: React.ReactNode;

}

export const UserPopover = ({
    children,
    
}: UserPopoverProps) => {
    
    const isOpen = usePopoverModal((state) => state.isOpen);
    const onclose = usePopoverModal((state) => state.close);
    const onOpen = usePopoverModal((state) => state.open);


    return (
        <Popover open={isOpen}  onOpenChange={onclose}>
            <PopoverTrigger asChild onChange={onOpen} >
               
            </PopoverTrigger>
            <PopoverContent>
                {children}
            </PopoverContent>
       </Popover>
    );
}