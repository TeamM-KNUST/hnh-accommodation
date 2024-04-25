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
import { ResetPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const PassswordResetForm = () => {
	const [pending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof ResetPasswordSchema>>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			email: ""
		},
	});

	const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			login(values)
				.then((data) => {
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
			headerLabel="Reset your password"
			backButtonLabel="Back to login"
			backButtonHref="/auth/login"
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

					<FormError message={error} />
					<FormSuccess message={success} />
					<Button type="submit" className="w-full" disabled={pending}>
						Reset Password
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
