import React, { useState } from "react";

export interface LoginForm {
    email: string,
    password: string
}
export default function useForm(initialValue: LoginForm):
    [LoginForm, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [formValue, setFormValue] = useState<LoginForm>(initialValue)

    const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return [formValue, onChangeFormValue]
}