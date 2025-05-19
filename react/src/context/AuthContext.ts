import { createContext } from "react";

export interface User {
    _id: string,
    icon: string,
    email: string,
    phone: number,
    username: string,
}

export interface UserData {
    payload: User | null;
    token: string;
}

export interface AuthContextType {
    auth: UserData | null;
    setAuth: (value: UserData | null) => void;
}



export const AuthContext = createContext<AuthContextType | null>(null)