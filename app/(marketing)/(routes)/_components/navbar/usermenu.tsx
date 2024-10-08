"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { AvatarImg } from "./avatarImage";
import { MenuIcon } from "lucide-react";
import useAddHostel from "@/hooks/addhostel";
import { Separator } from "@/components/ui/separator";
import useAddImage from "@/hooks/addImage";

export const UserMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isDashboard = pathname.includes("/dashboard");

  const addHostel = useAddHostel();
  const { data: session } = useSession();

  const renderActionButton = () => {

    if (isDashboard) {
      return (
        <div
          className="hidden
        md:block
        text-[1rem]
        font-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition-all duration-200 ease-in-out
        cursor-pointer"
          onClick={()=>addHostel.onOpen()}
        >
          Hostel
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative">
      <div className="flex item-center justify-end gap-2 ">
        {renderActionButton()}
        <div
          className="
          p-2
       md:py-1
        md:px-4
        border-[1px]
        border-neutral-200
        rounded-full
        transition-all
        duration-200
        ease-in-out
        hover:shadow-md
        flex
        items-center

        "
        >
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer flex items-center gap-3 ">
                <MenuIcon size={24} />
                <AvatarImg src={session?.user?.image} alt="user" />
              </div>
            </PopoverTrigger>
            <PopoverContent sideOffset={20}>
              {!session ? (
                <div className="flex flex-col gap-y-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push("auth/login")}
                  >
                    Login
                  </Button>

                  <Button
                    size="sm"
                    className="bg-blue-500 text-white"
                    onClick={() => router.push("auth/register")}
                  >
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-y-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push("/properties")}
                  >
                    Properties
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push("/favorites")}
                  >
                    Favorites
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push("/trips")}
                  >
                    Trips
                  </Button>
                  <Separator />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => signOut()}
                    className="w-full text-center"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
