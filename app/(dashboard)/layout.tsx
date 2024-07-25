
import Footer from "@/components/footer";
import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";
import { ModalProvider } from "../providers/modal-proivder";

interface DashboardLayoutProps {
    children: React.ReactNode;
    
}
const DashboardLayout = ({
children
}:DashboardLayoutProps) => {
    return (
      <div>
        <ModalProvider />
        <Navbar />
        <main className="pt-28 pb-16 min-h-screen">{children}</main>
        <Footer />
      </div>
    );
};

export default DashboardLayout;
