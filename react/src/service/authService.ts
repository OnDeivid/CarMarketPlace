import { AuthContextType, UserData } from "../context/AuthContext";
import { LoginForm } from "../hooks/useForm";
import axios from "axios";

export const onLogin = async (formValue: LoginForm): Promise<UserData | null> => {
    try {
        const response = await axios.post('http://localhost:3000/users/login', formValue);
        return response.data.data
    } catch (error) {
        console.error('Login failed:', error);
        return null;
    }
};