import Footer from "@/components/footer";
import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface PropertyLayoutProps {
  children: React.ReactNode;
}
const PropertyLayout = ({ children }: PropertyLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen">{children}</main>
      <Footer/>
    </div>
  );
};

export default PropertyLayout;
