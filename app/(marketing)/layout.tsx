import getCurrentUser from "@/actions/getCurrentUser";
import { Navbar } from "./(routes)/_components/navbar/Navbar";
import Footer from "@/components/footer";

interface marketingLayoutProps {
  children: React.ReactNode;
}

const marketingLayout = async ({ children }: marketingLayoutProps) => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <main className="pt-28 pb-16">{children}</main>
      <Footer/>
    </div>
  );
};

export default marketingLayout;
