import { generateRandomId } from "./generateRandomId"

export function generateArray(arrayLength: number): string[] {
    const newArray: string[] = []

    if (arrayLength <= 0) {
        return newArray
    }

    for (let i = 0; i < arrayLength; i++) {
        const arrayElementId = generateRandomId() + i

        newArray.push(arrayElementId)
    }

    return newArray
}