import { Input } from "@/components/ui/input";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import {  SearchIcon } from "lucide-react";

export const SearchExapnd
  = () => {
    const isScrolled = useScrollTop();
    return (
      <div
        className={cn(
          " border-[1px] w-full md:w-auto lg:w-auto py-2 px-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer",
     
        )}
      >
        <div className="flex items-center justify-between">
          <div className="text-[1rem] flex items-center font-semibold px-6  text-gray-700">
            <SearchIcon size={20} className="block md:hidden" />
            <Input
              placeholder="Search destinations"
              className="w-full bg-transparent border-none focus-visible:ring-transparent truncate text-gray-700"
            />
          </div>
          <div className=" hidden md:block text-[1rem] font-semibold px-6 border-x-[1px] flex-1 text-center text-gray-700">
            location
          </div>
          <div className="tex-[1rem] pl-6 pr-2 text-gray-600 flex items-center gap-3">
            <div className="hidden md:block">guestLabel</div>
          </div>
          <div className="p-2 bg-rose-500 rounded-full text-white pr-2">
            <SearchIcon size={18} />
          </div>
        </div>
      </div>
    );
}