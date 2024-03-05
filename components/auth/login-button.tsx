interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}:LoginButtonProps) => {

    return (
        <span >
            {children}
        </span>
    )
    
}