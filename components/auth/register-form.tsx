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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState, useTransition } from "react";

import { register } from "@/actions/register";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showComfirmPassword, setShowComfirmPassword] = useState(false);

	const [pending, startTransition] = useTransition();

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmpassword: "",
			name: "",
		},
	});

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError("");
		setSuccess("");
		startTransition(() => {
			register(values).then((data) => {
				if (!(data instanceof z.ZodError)) {
					setError(data.error);
					setSuccess(data.success);
				}
			});
		});
	};
	return (
		<CardWrapper
			headerLabel="Create an account"
			backButtonLabel="Already have an account?"
			backButtonHref="/auth/login"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="John Doe"
										type="name"
										disabled={pending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
											type="button"
											onClick={() => setShowPassword(!showPassword)}
										>
											{showPassword ? (
												<EyeOffIcon className="w-5 h-5" />
											) : (
												<EyeIcon className="w-5 h-5" />
											)}
										</Button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmpassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Comfirm Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											{...field}
											placeholder="********"
											type={showComfirmPassword ? "text" : "password"}
											disabled={pending}
										/>
										<Button
											className="absolute inset-y-0 right-2 flex items-center"
											size="icon"
											variant="ghost"
											type="button"
											onClick={() =>
												setShowComfirmPassword(!showComfirmPassword)
											}
											disabled={pending}
										>
											{showComfirmPassword ? (
												<EyeOffIcon className="w-5 h-5" />
											) : (
												<EyeIcon className="w-5 h-5" />
											)}
										</Button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormError message={error} />
					<FormSuccess message={success} />

					<Button disabled={pending} type="submit" className="w-full">
						Create an account
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
