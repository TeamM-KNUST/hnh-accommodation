import getCurrentUser from "@/actions/getCurrentUser";
import { Navbar } from "./(routes)/_components/navbar/Navbar";

interface marketingLayoutProps {
  children: React.ReactNode;
}

const marketingLayout = async ({ children }: marketingLayoutProps) => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <main className="pt-28 pb-16">{children}</main>
    </div>
  );
};

export default marketingLayout;
