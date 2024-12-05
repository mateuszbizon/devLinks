"use client"

import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import ArrowDownIcon from '../icons/ArrowDownIcon'

type SelectContext = {
    selectedValue: string
    onChangeValue: (value: string) => void
    closeSelect: () => void
}

const SelectContext = createContext<SelectContext | undefined>(undefined)

function useSelectContext() {
    const context = useContext(SelectContext)

    if (!context) {
        throw new Error("Select context must be used within Select component")
    }

    return context
}

type SelectProps = PropsWithChildren & {
    value: string
    onChangeValue: (value: string) => void
}

function Select({ value, onChangeValue, children }: SelectProps) {
    const [selectOpen, setSelectOpen] = useState(false)

    function closeSelect() {
        setSelectOpen(false)
    }

  return (
    <SelectContext.Provider value={{ selectedValue: value, onChangeValue, closeSelect }}>
        <div className='relative'>
            <div className='flex justify-between items-center bg-white rounded-md border border-borders p-4 focus-visible:border-purple cursor-pointer' onClick={() => setSelectOpen(prev => !prev)}>
                <span className='body-m text-grey-dark'>
                    {value}
                </span>
                <div className={`${selectOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}>
                    <ArrowDownIcon />
                </div>
            </div>
            <div className={`absolute top-[120%] w-full border border-borders rounded-md bg-white p-4 z-10 ${selectOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-200`}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    </SelectContext.Provider>
  )
}

type SelectItemProps = PropsWithChildren & {
    value: string;
}

function SelectItem({ value, children }: SelectItemProps) {
    const context = useSelectContext()
    const itemSelected = context.selectedValue === value

    function handleChooseItem() {
        context.onChangeValue(value)
        context.closeSelect()
    }

    return (
        <li className={`${itemSelected ? "text-purple" : "text-grey-dark"} flex items-center gap-2 py-2 body-m border-b border-b-borders last:border-b-0 last:pb-0 first:pt-0 cursor-pointer hover:text-purple transition duration-300`} onClick={handleChooseItem}>
            {children}
        </li>
    )
}

Select.Item = SelectItem

export default Select