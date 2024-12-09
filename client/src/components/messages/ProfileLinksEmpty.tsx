import React from "react";
import IllustrationEmptyIcon from "../icons/IllustrationEmptyIcon";

function ProfileLinksEmpty() {
	return (
		<div className='flex flex-col items-center gap-3'>
			<IllustrationEmptyIcon />
			<div className='max-w-[255px] md:max-w-[488px] space-y-3'>
				<span className='text-grey-dark text-2xl md:text-3xl font-bold text-center block'>
					Let's get you started
				</span>
				<p className='text-base text-grey text-center'>
					Use the “Add new link” button to get started. Once you have more than
					one link, you can reorder and edit them. We’re here to help you share
					your profiles with everyone!
				</p>
			</div>
		</div>
	);
}

export default ProfileLinksEmpty;
