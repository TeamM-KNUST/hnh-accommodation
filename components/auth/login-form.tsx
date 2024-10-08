"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";

import * as z from "zod";

import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");
	const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
		? "Email already in use by another account"
		: "";

	const [showPassword, setShowPassword] = useState(false);
	const [pending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			login(values, callbackUrl)
				.then((data ) => {
					if (data?.error) {
						setError(data.error);
						form.reset();
					}
					if (data?.success) {
						setSuccess(data.success);
					}
				})
				.catch((error) => {
					setError("Something went wrong");
					form.reset();
				});
		});
	};
	return (
		<CardWrapper
			headerLabel="Welcome Back"
			backButtonLabel="Don't have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="john.doe@example.com"
										type="email"
										disabled={pending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											{...field}
											placeholder="********"
											type={showPassword ? "text" : "password"}
											disabled={pending}
										/>
										<Button
											className="absolute inset-y-0 right-2 flex items-center"
											size="icon"
											variant="ghost"
											onClick={() => setShowPassword(!showPassword)}
											type="button"
										>
											{showPassword ? (
												<EyeOffIcon className="w-5 h-5" />
											) : (
												<EyeIcon className="w-5 h-5" />
											)}
										</Button>
									</div>
								</FormControl>
								<Button
									size="sm"
									variant="link"
									className="px-0 font-normal"
									asChild
								>
									<Link href="/auth/reset">Forgot password</Link>
								</Button>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormError message={error || urlError} />
					<FormSuccess message={success} />
					<Button type="submit" className="w-full" disabled={pending}>
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
