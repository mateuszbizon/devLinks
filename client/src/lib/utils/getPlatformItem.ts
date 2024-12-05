import { PLATFORMS_LIST } from "@/constants/platformsList";

export function getPlatformItem(value: string) {
    const foundItem = PLATFORMS_LIST.find(item => item.value === value)

    return foundItem
}