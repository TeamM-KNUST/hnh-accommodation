import Footer from "@/components/footer";
import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface TripsLayoutProps {
  children: React.ReactNode;
}
const TripsLayout = ({ children }: TripsLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen">{children}</main>
      <Footer/>
    </div>
  );
};

export default TripsLayout;
