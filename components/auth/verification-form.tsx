"use client";
import {BeatLoader} from "react-spinners";

import { CardWrapper } from "./card-wrapper";

export const VerificationForm = () => {
    return (
        
        <CardWrapper
            headerLabel="Confirm your email address"
            backButtonHref="auth/login"
            backButtonLabel="Back to login"
        
        >
            <div className="flex w-full items-center justify-center">
                <BeatLoader />
            </div>

        </CardWrapper>
    );
}