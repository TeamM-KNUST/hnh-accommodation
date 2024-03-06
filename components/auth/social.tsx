import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
	return (
		<div className="flex items-center w-full gap-x-2">
			<Button className="w-full" variant="outline" size="lg" onClick={() => {}}>
				<FcGoogle className="w-6 h-6" />
			</Button>
			<Button className="w-full" variant="outline" size="lg" onClick={() => {}}>
				<FaGithub className="w-6 h-6" />
			</Button>
		</div>
	);
};
