import { useEffect } from "react"

function useClickOutside<T extends HTMLElement>(container: React.MutableRefObject<T | null>, containerOpen: boolean, closeContainer: () => void) {
    useEffect(() => {
        if (!containerOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (!container.current?.contains(e.target as Node)) {
                closeContainer()
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [containerOpen])
}

export default useClickOutside