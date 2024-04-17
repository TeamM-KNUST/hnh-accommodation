import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000/auth/confirm?token=${token}`;
	await resend.emails.send({
		from: "onboarding@dev.com",
		to: email,
		subject: "Confirm your email",
		html: `
            <p>Click the link below to confirm your email address</p>
            <a href="${confirmLink}">Confirm email</a>
        `,
	});
};
