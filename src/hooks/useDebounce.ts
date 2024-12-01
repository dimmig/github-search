import {useEffect, useState} from "react";

export const useDebounce = (value: string | null, delay: number = 300): string | null => {
    const [debounce, setDebounce] = useState<string | null>(null)

    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounce
}