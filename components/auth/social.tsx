"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	}
	
	return (
		<div className="flex items-center w-full gap-x-2">
			<Button className="w-full" variant="outline" size="lg" onClick={() => onClick("google")}>
				<FcGoogle className="w-6 h-6" />
			</Button>
			<Button className="w-full" variant="outline" size="lg" onClick={() => onClick("github")}>
				<FaGithub className="w-6 h-6" />
			</Button>
		</div>
	);
};
