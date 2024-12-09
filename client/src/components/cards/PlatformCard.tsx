import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { ProfileLink } from "@/types";
import { getPlatformItem } from "@/lib/utils/getPlatformItem";

type PlatformCardProps = {
	profileLink: ProfileLink;
};

function PlatformCard({ profileLink }: PlatformCardProps) {
	const currentPlatform = getPlatformItem(profileLink.platform);

	return (
		<div
			className='flex justify-between items-center p-4 rounded-xl'
			style={{ backgroundColor: currentPlatform?.bgColor }}>
			<div
				className={`flex items-center gap-2 ${
					currentPlatform?.isDarkTextColor ? "text-grey-dark" : "text-white"
				}`}>
				{currentPlatform?.icon}{" "}
				<span className='text-base'>{profileLink.platform}</span>
			</div>
			<div
				className={`${
					currentPlatform?.isDarkTextColor ? "text-grey-dark" : "text-white"
				}`}>
				<ArrowRightIcon />
			</div>
		</div>
	);
}

export default PlatformCard;
