import { useState } from "react";
import { UserData } from "../context/AuthContext";

export default function useAuth(key: string, initialValue: UserData | null):
    [UserData | null, (value: UserData | null) => void] {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        if (persistedStateSerialized) {
            return JSON.parse(persistedStateSerialized)
        }
        return initialValue
    })

    const setAuth = (value: UserData | null): void => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [state, setAuth]
}