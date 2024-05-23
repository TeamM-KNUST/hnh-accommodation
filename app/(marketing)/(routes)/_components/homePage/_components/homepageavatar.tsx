import Image from "next/image";

interface HomePageAvatarProps {
	imgUrl: string;
	flagImgUrl: string;
	size: number;
	flagPosition: number;
	borderColor: string;
	className: string;
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
			className={`relative inline-block rounded-full overflow-hidden border-2 ${className}`}
			style={{ width: `${size}px`, height: `${size}px`, borderColor }}
		>
			<img
				src={imgUrl}
				alt="Avatar"
				className="w-full h-full object-cover rounded-full"
			/>
			<img
				src={flagImgUrl}
				alt="Flag"
				className="absolute rounded-full"
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
