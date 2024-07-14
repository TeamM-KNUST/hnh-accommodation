import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface TripsLayoutProps {
  children: React.ReactNode;
}
const TripsLayout = ({ children }: TripsLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16">{children}</main>
    </div>
  );
};

export default TripsLayout;
