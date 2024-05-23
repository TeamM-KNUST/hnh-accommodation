
interface HomePageAvatarDotProps {
    size: number;
    fill?: boolean;
    color: string;
    className?: string;
}





export const HomePageAvatarDot = ({
    size,
    fill = false,
    color,
    className,
}: HomePageAvatarDotProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill ? color : "none"}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                fill={color}
            />
        </svg>
    )
}