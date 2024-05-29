import { Container } from "@/components/container";
import { Poppins } from "next/font/google";
import { InterSection } from "./_components/homePage/Interconection/intersection";
import { Connect } from "./_components/homePage/connect";
import { Hero } from "./_components/homePage/hero";
import { Sayhello } from "./_components/homePage/sayhello";
import { SoloToSocial } from "./_components/homePage/SoloToSocial/solotosocial";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-y-6">
        <Connect />
        <InterSection />
        <Sayhello />
        <SoloToSocial />
      </div>
    </Container>
  );
}
