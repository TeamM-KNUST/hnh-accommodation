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
import { useState } from "react";

export const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showComfirmPassword, setShowComfirmPassword] = useState(false);

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmpassword: "",
			name: "",
		},
	});

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		console.log(data);
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
									<Input {...field} placeholder="John Doe" type="name" />
								</FormControl>
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
									/>
								</FormControl>
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
										/>
										<Button
											className="absolute inset-y-0 right-2 flex items-center"
											size="icon"
											variant="ghost"
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
										/>
										<Button
											className="absolute inset-y-0 right-2 flex items-center"
											size="icon"
											variant="ghost"
											onClick={() =>
												setShowComfirmPassword(!showComfirmPassword)
											}
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

					<Button type="submit" className="w-full">
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
