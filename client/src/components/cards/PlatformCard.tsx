import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { ProfileLink } from "@/types";
import { getPlatformItem } from "@/lib/utils/getPlatformItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { showCopyToClipboardMessage } from "@/lib/store/slices/popupMessageSlice";
import { MESSAGES } from "@/constants/messages";

type PlatformCardProps = {
	profileLink: ProfileLink;
};

function PlatformCard({ profileLink }: PlatformCardProps) {
	const dispatch = useDispatch<AppDispatch>()
	const currentPlatform = getPlatformItem(profileLink.platform);

	function copyLink() {
		navigator.clipboard.writeText(profileLink.link)
		dispatch(showCopyToClipboardMessage(MESSAGES.user.linkCopied))
	}

	return (
		<div
			className='flex justify-between items-center p-4 rounded-xl h-11 cursor-pointer'
			style={{ backgroundColor: currentPlatform?.bgColor }}
			onClick={copyLink}
		>
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
