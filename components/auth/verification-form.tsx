"use client";
import { BeatLoader } from "react-spinners";

import { NewVerification } from "@/actions/new-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { CardWrapper } from "./card-wrapper";

export const VerificationForm = () => {
	const [error, setError] = useState<string | undefined>();
	const [success, setSucess] = useState<string | undefined>();

	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		if (success || error) return;
		if (!token) {
			setError("Missing token!");
			return;
		}
		NewVerification(token)
			.then((data) => {
				setSucess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError("Something Went Wrong!");
			});
	}, [token, success, error]);
	useEffect(() => {
		onSubmit();
	}, [onSubmit]);
	return (
		<CardWrapper
			headerLabel="Confirm your email address"
			backButtonHref="auth/login"
			backButtonLabel="Back to login"
		>
			<div className="flex w-full items-center justify-center">
				{!success && !error && <BeatLoader />}
				<FormSuccess message={success} />
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	);
};
