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

export interface CreateAndEditForm {
    model: string,
    brand: string,
    year: string,
    mileage: number,
    fuel: 'Petrol' | 'Diesel' | 'Electric',
    price: number,
    currency: 'EUR' | 'BGN' | 'USD',
    description: string,
    image: string
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export default function useForm<T>(initialValue: T):
    [T, (e: FormEvent) => void] {
    const [formValue, setFormValue] = useState<T>(initialValue)

    const onChangeFormValue = (e: FormEvent) => {
        setFormValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return [formValue, onChangeFormValue]
}