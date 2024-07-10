import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface PropertyLayoutProps {
  children: React.ReactNode;
}
const PropertyLayout = ({ children }: PropertyLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16">{children}</main>
    </div>
  );
};

export default PropertyLayout;
