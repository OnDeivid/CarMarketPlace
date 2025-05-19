import axios from "axios";

import { UserData } from "../context/AuthContext";
import { LoginForm, RegisterForm } from "../hooks/useForm";

export const onLogin = async (formValue: LoginForm): Promise<UserData> => {
    try {
        const response = await axios.post('http://localhost:3000/users/login', formValue);
        return response.data.data
    } catch (error: any) {
        const message = error?.response?.data?.error || 'Login failed. Please try again.';
        return Promise.reject(new Error(message));
    }
};


export const onRegister = async (formValue: RegisterForm) => {
    try {
        const response = await axios.post('http://localhost:3000/users/register', formValue);
        return response.data;
    } catch (error: any) {
        const message = error?.response?.data?.error || 'Registration failed. Please try again.';
        return Promise.reject(new Error(message));
    }
}

export const onLogout = async () => {
    try {
        await axios.get('http://localhost:3000/users/logout')
    } catch (error) {
        const message = 'Logout failed. Please try again.';
        return Promise.reject(new Error(message));
    }
}