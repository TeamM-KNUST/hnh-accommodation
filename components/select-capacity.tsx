"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomCount } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { RegisterSchema } from "@/schemas";

export const UserMenu = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      setError(undefined);
      setSuccess(undefined);

      fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            setSuccess("Role updated successfully");
            update();
          } else {
            setError("Something went wrong");
          }
        })
        .catch(() => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Room" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Room Capacity</SelectLabel>
          {Object.values(RoomCount).map((count) => (
            <SelectItem key={count} value={count}>
              {count}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );

};