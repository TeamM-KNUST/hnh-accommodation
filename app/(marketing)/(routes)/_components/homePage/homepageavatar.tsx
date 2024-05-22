import Image from "next/image";

interface HomePageAvatarProps {
	imgUrl: string;
	flagImgUrl: string;
	size: number;
	flagPosition: number;
	borerColor: string;
	className: string;
	alt: string;
	width?: number;
	height?: number;
}

export const HomePageAvatar = ({
	imgUrl,
	flagImgUrl,
	size,
	flagPosition,
	borerColor,
	className,
	alt,
}: HomePageAvatarProps) => {
	return (
		<div className="relative">
			<Image
				src={imgUrl}
				alt={alt}
				className={className}
				style={{
					objectPosition: flagPosition,
					border: borerColor,
					borderRadius: "50%",
				}}
				width={size}
				height={size}
			/>
			<Image
				src={flagImgUrl}
				alt={alt}
				className="absolute top-0 left-0"
				style={{
					objectPosition: flagPosition,
					border: `${borerColor}`,
					borderRadius: "50%",
				}}
				width={size}
				height={size}
			/>
		</div>
	);
};
