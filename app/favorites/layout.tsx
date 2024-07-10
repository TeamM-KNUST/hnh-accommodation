import { Navbar } from "../(marketing)/(routes)/_components/navbar/Navbar";
import { ModalProvider } from "../providers/modal-proivder";

interface FavoritesLayoutProps {
  children: React.ReactNode;
}
const FavoritesLayout = ({ children }: FavoritesLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16">{children}</main>
    </div>
  );
};

export default FavoritesLayout;
