import { Button } from "@/components/ui/button";
import { ArrowRight, Clock5 } from "lucide-react";
import Image from "next/image";
import { FaVenus } from "react-icons/fa";
import { HomePageAvatar } from "./homepageavatar";
import { cn } from "@/lib/utils";
interface CommunityCardsProps {
	frameUrl: string;
	participantsAvatarUrls: string[];
	participantsCount: number;
	avatarUrl: string;
	title: string;
	location: string;
	time: string;
	name: string;
	className?: string;
}

export const CommunityCards = ({
	frameUrl,
	participantsAvatarUrls,
	participantsCount,
	avatarUrl,
	title,
	location,
	time,
	name,
	className
}: CommunityCardsProps) => {
	const isVideoUrl = /(mp4)$/m.test(frameUrl);
	return (
		<div className="relative md:h-[30.25rem] md:w-[18.1875rem] h-[19.75rem] w-[11.5rem]">
			{isVideoUrl ? (
				<video
					autoPlay
					loop
					muted
					playsInline
					title=""
					className={cn(
						"absolute w-full h-full rounded-3xl object-cover",
						className
					)}
				>
					<source src={frameUrl} type="video/mp4" />
				</video>
			) : (
				<Image
					src={frameUrl}
					alt=""
					className={cn(
						"absolute w-full h-full rounded-3xl object-cover",
						className
					)}
					width={32}
					height={32}
				/>
			)}
			<div className="relative w-full h-full flex flex-col justify-between items-center text-white rounded-md px-3 py-2 z-6">
				<div className="flex items-center top-4 left-4 ">
					<div className="relative mr-2">
						<HomePageAvatar imgUrl={avatarUrl} size={50} alt="" />
					</div>
					<div className="font-semibold text-xs translate-y-[-6px]">{name}</div>
				</div>
				<div className="flex flex-col">
					<h4 className="font-normal mb-2 text-xl tracking-[-0.1px] ">
						{title}
					</h4>
					<div className="flex font-semibold mb-1 leading-3">
						<span className="flex items-center">
							<Clock5 className="h-[0.624rem] w-[0.625rem] mr-1 translate-y-[-3px]" />
							{time}
						</span>
						<span className="flex items-center">
							<FaVenus className="h-[0.624rem] w-[0.625rem] mr-1 translate-y-[-3px]" />
							{location}
						</span>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center font-semibold text-sm ">
							<div className="relative w-16 translate-y-[-5px]">
								{/* {participantsAvatarUrls.map((avatarUrl, index) => (
									<HomePageAvatar
										key={index}
										imgUrl={avatarUrl}
										size={24}
										alt=""
									/>
								))} */}
							</div>
							<div className="self-end">{`+${participantsCount} coming`}</div>
							<Button
								variant="purple"
								className="flex items-center font-semibold text-sm justify-center  tracking-[-0.01875rem] ml-6"
								size="lg"
							>
								Join
								<ArrowRight size={16} className="text-white" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
