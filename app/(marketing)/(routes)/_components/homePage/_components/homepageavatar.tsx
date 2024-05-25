import Image from "next/image";

interface HomePageAvatarProps {
	imgUrl: string;
	flagImgUrl?: string;
	size: number;
	flagPosition?: number;
	borderColor?: string;
	className?: string;
	alt?: string;
	
}

export const HomePageAvatar = ({
	imgUrl,
	flagImgUrl,
	size,
	flagPosition,
	borderColor,
	className,
}: HomePageAvatarProps) => {
	return (
		<div
			className={`relative inline-block overflow-hidden rounded-full border-2 ${className}`}
			style={{ width: `${size}px`, height: `${size}px`, borderColor }}
		>
			<img
				src={imgUrl}
				alt="Avatar"
				className="w-full h-full rounded-full object-cover "
			/>
			<img
				src={flagImgUrl}
				alt="Flag"
				className="absolute"
				style={{
					top: `${flagPosition}px`,
					right: `${flagPosition}px`,
					width: `${size * 0.2}px`,
					height: `${size * 0.2}px`,
				}}
			/>
		</div>
	);
};
