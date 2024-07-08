"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface HeadingProps {
  title: string;
  subTitle: string;
  center?: string;
}

export const Heading = ({ title, subTitle, center }: HeadingProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={center ? "text-center" : "text-start"}>
      {isLoading ? (
        <div className="flex flex-col gap-3">
          <Skeleton className="w-[200px] h-[30px]" />
          <Skeleton className="w-[150px] h-[20px]" />
        </div>
      ) : (
        <>
          <div className="text-lg font-normal">{title}</div>
          <div className="font-light text-neutral-500 ">{subTitle}</div>
        </>
      )}
    </div>
  );
};
