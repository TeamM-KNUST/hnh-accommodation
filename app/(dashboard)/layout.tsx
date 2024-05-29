
import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
    
}
const DashboardLayout = ({
children
}:DashboardLayoutProps) => {
    return (<div>
        <Navbar />
        <main  className="pt-28 pb-16">
            {children}
        </main>
    </div>
  );
};

export default DashboardLayout;
