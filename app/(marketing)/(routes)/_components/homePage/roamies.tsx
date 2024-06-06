import { cn } from "@/lib/utils";
import "../style/roamies.css";

import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});



export const Roamies = () => {
    return (
      <section className="bg-[#121417] flex-col xl:flex items-center justify-center min-h-[50rem] px-4 xl:px-8 section">
        <div className="text-white mb-[12rem] text-accent xl:mb-0 xl:mr-[6.875rem] xl:min-w-[36.375rem] text-left">
          <h2 className={cn("text-5xl xl:text-7xl mb-4", font.className)}>
            <span className="text-[#cc0074]">Small group tours </span>
            in epic places
          </h2>
          <p className="text-xl">
            Explore somewhere new, with a ready-made crew! Adventurous tours,
            with local guides, and sociable hostels.
          </p>
            </div>
            <div className="flex items-center mb-8 mt-16 max-h-[23.375rem]max-w-[21.375rem] xl:my-[6rem] max-h-[38.75rem] max-w-[48.75rem] xl:mb-0">
                <div className="mr-[-1rem] xl:mr-6 xl:mt-16">
                    <Image 
                        src={"https://a.hwstatic.com/image/upload/f_auto,h_260,w_355,q_50/v1651737425/pwa/roamies/roamies.d.2.png"}
                        alt="Roamies"
                        width={355}
                        height={260}
                        loading="lazy"
                    />

                </div>

            </div>
      </section>
    );
}