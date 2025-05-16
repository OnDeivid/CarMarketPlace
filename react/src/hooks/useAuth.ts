import { useState } from "react";
import { UserData } from "../context/AuthContext";

export default function useAuth(key: string, initialValue: UserData | string):
    [UserData | string, (value: UserData | string) => void] {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        if (persistedStateSerialized) {
            return JSON.parse(persistedStateSerialized)
        }
        return initialValue
    })

    const setAuth = (value: UserData | string): void => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [state, setAuth]
}