"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import "../style/connect.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export const Connect = () => {
	const router = useRouter();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const getImageUrl = useMemo(() => {
    return isSmallScreen
      ? "https://a.hwstatic.com/image/upload/f_auto,h_400,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img-sm.jpg"
      : "https://a.hwstatic.com/image/upload/f_auto,h_568,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img.jpg";
  }, [isSmallScreen]);
  return (
    <div className=" relative w-full flex flex-col lg:flex-row max-w-[1600px] mx-auto xl:pl-28 md:pl-10 sm:pl-2">
      <Image
        src={getImageUrl}
        alt="hostel"
        className="block mx-auto object-contain  max-h-[568px] w-[305px]exi lg:order-2 lg:max-h-[568px] lg:w-[568px] lg:m-0"
        height={568}
        width={504}
      />
      <div className="flex flex-col items-center justify-center lg:items-start pt-3">
        <p
          className={cn(
            "text-sm md:text-lg lg:text-xl xl:text-2xl mb-2 lg:mt-8 lg:mb-4 font-bold",
            font.className
          )}
        >
          This is the <span className="text-[#cc0074]">NEW</span> Hostelworld.
        </p>
        <h2
          className={cn(
            "font-medium sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl  hyphens-auto lg:mt-4 lg:mb-4 h3",
            font.className
          )}
        >
          Helping you
          <span className="text-[#cc0074]"> connect with travellers </span> .
          Even <span className="text-[#cc0074]">before</span> you get to your
          hostel.
        </h2>
        <Button
          size="lg"
				  className="h-12 mt-4 text-lg font-semibold bg-[#cc0074] text-white text-center "
				  onClick={() => router.push("/dashboard")}
        >
          Browse hostels
        </Button>
      </div>
    </div>
  );
};
