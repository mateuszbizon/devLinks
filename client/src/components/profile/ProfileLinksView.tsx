"use client";

import React from "react";
import { Button } from "../ui/button";
import ProfileLinksForm from "../forms/ProfileLinksForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { addLink } from "@/lib/store/slices/profileLinksSlice";

function ProfileLinksView() {
	const { profileLinks } = useSelector(
		(state: RootState) => state.profileLinks
	);
	const dispatch = useDispatch<AppDispatch>();

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
				<Button
					variant={"secondary"}
					className='w-full mt-5'
					onClick={() => dispatch(addLink())}>
					+ Add new link
				</Button>
			</div>

			<ProfileLinksForm profileLinks={profileLinks} />
		</div>
	);
}

export default ProfileLinksView;
