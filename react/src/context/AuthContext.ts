import { createContext } from "react";

export interface User {
    _id: string,
    icon: string,
    email: string,
    phone: number,
    username: string,
}
export interface UserData {
    payload: User,
    token: string
}

export interface AuthContextType {
    auth: UserData | string;
    setAuth: (value: UserData | string) => void
}



export const AuthContext = createContext<AuthContextType | null>(null)