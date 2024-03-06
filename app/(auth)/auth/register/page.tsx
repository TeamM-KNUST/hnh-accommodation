import { RegisterForm } from "@/components/auth/register-form";

const RegisterPage = () => {
	return (
		<div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
