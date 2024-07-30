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
    <section className=" bg-[#121417] flex flex-col xl:flex-row items-center justify-center min-h-[50rem] section">
      <div className="text-white text-center xl:mb-0 xl:mr-[6.875rem] xl:max-w-[36.375rem] xl:text-left">
        <h2 className={cn("text-5xl xl:text-7xl mb-4", font.className)}>
          <span className="text-[#cc0074]">Small group tours </span>
          in epic places
        </h2>
        <p className="text-xl px-8 xl:px-0">
          Explore somewhere new, with a ready-made crew! Adventurous tours, with
          local guides, and sociable hostels.
        </p>
      </div>
      <div className="flex items-center mb-8 mt-16 max-h-[23.375rem] min-w-[21.4375rem]  xl:max-w-[48.75rem] xl:max-h-[38.75rem]">
        <div className="mr-[-1rem] xl:mr-6 xl:mt-16 overflow-hidden max-w-full ">
          <Image
            src="/image/home.jpg"
            alt="Roamies"
            width={455}
            height={360}
            loading="lazy"
            className="hidden xl:block rounded-3xl"
          />
          <Image
            src="/image/home.jpg"
            alt="Roamies"
            width={172}
            height={150}
            loading="lazy"
            className="xl:hidden rounded-3xl"
          />
          <div className="ml:auto mr-8 xl:mr-0 mt-4">
            <Image
              src={
                "https://a.hwstatic.com/image/upload/f_auto,h_170,w_170,q_50/v1651737423/pwa/roamies/roamies.d.3.png"
              }
              alt="Roamies"
              width={170}
              height={170}
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-4 overflow-hidden max-w-full">
          <Image
            src={
              "https://a.hwstatic.com/image/upload/f_auto,h_302,w_287,q_50/v1651737425/pwa/roamies/roamies.d.1.png"
            }
            alt="Roamies"
            width={287}
            height={302}
            loading="lazy"
            className="hidden xl:block"
          />
          <Image
            src={
              "https://a.hwstatic.com/image/upload/f_auto,h_173,w_135,q_50/v1651737423/pwa/roamies/roamies.m1.png"
            }
            alt="Roamies"
            width={135}
            height={173}
            loading="lazy"
            className="xl:hidden max-w-full h-auto"
          />
          <Image
            src="/image/ms.jpg"
            alt="Roamies"
            width={393}
            height={292}
            loading="lazy"
            className="hidden xl:block rounded-3xl"
          />
          <Image
            src="/image/ms.jpg"
            alt="Roamies"
            width={180}
            height={181}
            loading="lazy"
            className="xl:hidden rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
