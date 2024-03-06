import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
    return (
			<div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
				<LoginForm />
			</div>
		);
}
 
export default LoginPage;