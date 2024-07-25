import Footer from "@/components/footer";
import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface NewListingLayoutProps {
  children: React.ReactNode;
}
const NewListingLayout = ({ children }: NewListingLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default NewListingLayout;
