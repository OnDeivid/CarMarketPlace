import React, { useState } from "react";

export interface LoginForm {
    email: string,
    password: string
}
export interface RegisterForm {
    email: string,
    profileIcon: string,
    username: string,
    number: number,
    password: string,
    rePassword: string
}


export default function useForm<T>(initialValue: T):
    [T, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [formValue, setFormValue] = useState<T>(initialValue)

    const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return [formValue, onChangeFormValue]
}