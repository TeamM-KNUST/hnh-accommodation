import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarImgProps {
    src?: string | undefined;
    alt?: string;

}


export const AvatarImg =({src, alt}:AvatarImgProps) => {
    
    return (
        <Avatar>
            <AvatarImage src={src||'/image/placeholder.jpg'  } alt={alt} />
            <AvatarFallback>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </AvatarFallback>
        </Avatar>
    )
}