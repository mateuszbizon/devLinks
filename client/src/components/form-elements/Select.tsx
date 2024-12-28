"use client";

import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useRef,
	useState,
} from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { getPlatformItem } from "@/lib/utils/getPlatformItem";
import useClickOutside from "@/lib/hooks/useClickOutside";

type SelectContext = {
	selectedValue: string;
	onChangeValue: (value: string) => void;
	closeSelect: () => void;
	selectOpen: boolean;
};

const SelectContext = createContext<SelectContext | undefined>(undefined);

function useSelectContext() {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error("Select context must be used within Select component");
	}

	return context;
}

type SelectProps = PropsWithChildren & {
	value: string;
	onChangeValue: (value: string) => void;
};

function Select({ value, onChangeValue, children }: SelectProps) {
	const [selectOpen, setSelectOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement | null>(null);

	function closeSelect() {
		setSelectOpen(false);
	}

	useClickOutside(selectRef, selectOpen, closeSelect);

	return (
		<SelectContext.Provider
			value={{ selectedValue: value, onChangeValue, closeSelect, selectOpen }}>
			<div ref={selectRef} className='relative'>
				<button
					className={`flex justify-between items-center w-full bg-white rounded-md border border-borders p-4 outline-none focus-visible:border-purple focus-visible:shadow-active ${selectOpen && "border-purple shadow-active"}`}
					onClick={() => setSelectOpen(prev => !prev)}
					type="button"
				>
					<span className='flex gap-2 items-center text-base text-grey-dark'>
						{getPlatformItem(value)?.icon} {value}
					</span>
					<div
						className={`${
							selectOpen ? "rotate-180" : "rotate-0"
						} transition-transform duration-200`}>
						<ArrowDownIcon />
					</div>
				</button>
				<div
					className={`absolute top-[120%] w-full border border-borders rounded-md bg-white p-4 z-10 ${
						selectOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					} transition-opacity duration-200`}>
					<ul>{children}</ul>
				</div>
			</div>
		</SelectContext.Provider>
	);
}

type SelectItemProps = PropsWithChildren & {
	value: string;
};

function SelectItem({ value, children }: SelectItemProps) {
	const context = useSelectContext();
	const itemSelected = context.selectedValue === value;

	function handleChooseItem() {
		context.onChangeValue(value);
		context.closeSelect();
	}

	function handleChooseWithKey(e: React.KeyboardEvent<HTMLLIElement>) {
		if (e.key === "Enter") {
			handleChooseItem()
		}
	}

	return (
		<li
			tabIndex={context.selectOpen ? 0 : -1}
			className={`${
				itemSelected ? "text-purple" : "text-grey-dark"
			} flex items-center gap-2 py-2 text-base border-b border-b-borders last:border-b-0 last:pb-0 first:pt-0 cursor-pointer hover:text-purple outline-none focus-visible:text-purple transition duration-300`}
			onClick={handleChooseItem}
			onKeyUp={handleChooseWithKey}
		>
			{children}
		</li>
	);
}

Select.Item = SelectItem;

export default Select;
