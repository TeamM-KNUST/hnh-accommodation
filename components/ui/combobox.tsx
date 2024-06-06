"use client";

import * as React from "react";

import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "./button";

import {
  Command,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "./command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComboboxProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
}

export const Combobox = ({ options, value, onChange }: ComboboxProps) => {
  const [open, setOPen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOPen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select an option"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Options ... " />
          <CommandEmpty>No options found</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onChange(option.value === value ? "" : option.value);
                  setOPen(false);
                }}
              >
                <Check
                  className={cn(
                    "h-4 w-4 mr-2",
                    option.value === value ? "text-primary" : "text-gray-400"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
