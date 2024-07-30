"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboboxProps = {
  data?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
};

export function Combobox({ data, onChange, children }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(data || "");

  const handleSelect = (itemName: string) => {
    setValue(itemName); // Update local state
    if (onChange) {
      onChange(itemName); // Invoke onChange prop with new value
    }
    setOpen(false); // Close the popover
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {value || "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>
              {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement, {
                  onSelect: handleSelect,
                  selectedValue: value,
                })
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type ComboboxItemProps = {
  id: string;
  name: string;
  onSelect: (name: string) => void;
  selectedValue: string;
};

export function ComboboxItem({
  id,
  name,
  onSelect,
  selectedValue,
}: ComboboxItemProps) {
  return (
    <CommandItem key={id} onSelect={() => onSelect(name)}>
      <Check
        className={cn(
          "mr-2 h-4 w-4",
          selectedValue === name ? "opacity-100" : "opacity-0"
        )}
      />
      {name}
    </CommandItem>
  );
}
