"use client";

import React from "react";
import ProfileLinksForm from "../forms/ProfileLinksForm";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function ProfileLinksView() {
	const { profileLinks } = useSelector(
		(state: RootState) => state.profileLinks
	);

	return (
		<div>
			<div className='flex flex-col gap-3 p-6'>
				<h1 className='text-2xl md:text-3xl font-bold text-grey-dark'>
					Customize your links
				</h1>
				<p className='text-base text-grey'>
					Add/edit/remove links below and then share all your profiles with the
					world!
				</p>
			</div>

			<ProfileLinksForm profileLinks={profileLinks} />
		</div>
	);
}

export default ProfileLinksView;
