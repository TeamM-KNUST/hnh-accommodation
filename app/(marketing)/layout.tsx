import { Navbar } from "./(routes)/_components/navbar/Navbar";

interface marketingLayoutProps {
	children: React.ReactNode;
}

const marketingLayout = ({ children }: marketingLayoutProps) => {
	return (
        <div>
            <Navbar/>
			<main>{children}</main>
		</div>
	);
};

export default marketingLayout;
