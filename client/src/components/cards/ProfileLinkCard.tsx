"use client";

import { ProfileLink } from "@/types";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "../ui/button";
import DragDropIcon from "../icons/DragDropIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { deleteLink, updateLink } from "@/lib/store/slices/profileLinksSlice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import LinkInputIcon from "../icons/LinkInputIcon";
import { FieldErrors, UseFieldArrayRemove, UseFormSetValue } from "react-hook-form";
import { ProfileLinksSchema } from "@/validations/profileLinksSchema";
import Select from "../form-elements/Select";
import { PLATFORMS_LIST } from "@/constants/platformsList";

type ProfileLinkCardProps = PropsWithChildren & {
	profileLink: ProfileLink;
	linkIndex: number;
	errors: FieldErrors<ProfileLinksSchema>;
	setValue: UseFormSetValue<ProfileLinksSchema>
	removeFieldArray: UseFieldArrayRemove
};

function ProfileLinkCard({
	profileLink,
	linkIndex,
	errors,
	setValue,
	removeFieldArray
}: ProfileLinkCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	const [currentLink, setCurrentLink] = useState(profileLink)

	function handleChangeInput(value: string) {
		setCurrentLink({ ...currentLink, link: value })
		setValue(`profileLinks.${linkIndex}.link`, value)
	}

	function handleChangeSelect(value: string) {
		setCurrentLink({ ...currentLink, platform: value })
		setValue(`profileLinks.${linkIndex}.platform`, value)
	}

	function handleRemoveLink() {
		removeFieldArray(linkIndex)
		dispatch(deleteLink(profileLink.id))
	}

	useEffect(() => {
		dispatch(updateLink(currentLink))
	}, [currentLink]);

	return (
		<div className='p-5 bg-grey-light rounded-md space-y-2'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<DragDropIcon />
					<span className='text-lg text-grey'>Link #{linkIndex + 1}</span>
				</div>
				<Button
					variant={"tab"}
					className='p-0 text-base'
					onClick={handleRemoveLink}
				>
					Remove
				</Button>
			</div>
			<div className='space-y-2'>
				<div>
					<Label>Platform</Label>
					<Select
						value={currentLink.platform}
						onChangeValue={handleChangeSelect}>
						{PLATFORMS_LIST.map(item => (
							<Select.Item key={item.value} value={item.value}>
								{item.icon} {item.value}
							</Select.Item>
						))}
					</Select>
				</div>
				<div>
					<Label htmlFor={`link-${profileLink.id}`}>Link</Label>
					<Input
						id={`link-${profileLink.id}`}
						type='text'
						value={currentLink.link}
						placeholder='e.g. https://www.github.com/johnappleseed'
						icon={<LinkInputIcon />}
						onChange={e => handleChangeInput(e.target.value)}
						error={
							errors.profileLinks?.[linkIndex]?.link &&
							errors.profileLinks[linkIndex].link.message
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProfileLinkCard;
