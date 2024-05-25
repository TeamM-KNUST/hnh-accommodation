import { Button } from "@/components/ui/button";
import { ArrowRight, Clock5 } from "lucide-react";
import Image from "next/image";
import { FaVenus } from "react-icons/fa";
import { HomePageAvatar } from "./homepageavatar";
import "../../style/community.css"

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
		<div className="card-wrapper">
			{isVideoUrl ? (
				<video autoPlay loop muted playsInline title="" className="media">
					<source src={frameUrl} type="video/mp4" />
				</video>
			) : (
				<Image src={frameUrl} alt="" className="media" width={32} height={32} />
			)}
			<div className="content">
				<div className="content-topGroup">
					<div className="content-avatar">
						<HomePageAvatar imgUrl={avatarUrl} size={32} alt="" />
					</div>
					<div className="content-name">{name}</div>
				</div>
				<div className="content-bottomGroup">
					<h4 className="content-title">{title}</h4>
					<div className="content-info">
						<span className="content-time">
							<Clock5 size={16} />
							{time}
						</span>
						<span className="content-location">
							<FaVenus size={16} />
							{location}
						</span>
					</div>
					<div className="content-bottom ">
						<div className="content-peopleCount">
							<div className="content-avatarsGroup">
								{/* {participantsAvatarUrls.map((avatarUrl, index) => (
									<HomePageAvatar
										key={index}
										imgUrl={avatarUrl}
										size={24}
										alt=""
									/>
								))} */}
							</div>
							<div>{`+${participantsCount} coming`}</div>
							<Button
								variant="default"
							
								className="content-button w-full ml-6">
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
