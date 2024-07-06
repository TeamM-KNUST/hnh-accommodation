"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import qs from "query-string";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

interface SearchInputProps {
  values?: string;
  onChanges?: (value: string) => void;
}

export const SearchInput = ({ values, onChanges }: SearchInputProps) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const debouncedValue = useDebounce(value, 500);

  const generatedUrl = useMemo(() => {
    return qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
  }, [pathname, debouncedValue]);

  useEffect(() => {
    router.push(generatedUrl);
  }, [generatedUrl, router]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3  left-3 text-blue-700 dark:text-slate-200" />
      <Input
        value={value}
        onChange={onChange} 
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100/10  focus-visible:ring-slate-200 "
        placeholder="Search for a hostel ...."
      />
    </div>
  );
};
