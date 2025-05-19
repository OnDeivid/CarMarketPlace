import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react"

import useForm, { LoginForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";

import formValidation from "../../utils/formValidation";
import { onLogin } from "../../service/authService";


export default function Login() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const [formValue, onChangeFormValue] = useForm<LoginForm>({ email: '', password: '' })
    const [formErrors, setFormErrors] = useState<Record<string, string> | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        let error = formValidation<LoginForm>(formValue)

        if (Object.values(error).length > 0) {
            setFormErrors(error)
            return
        }
        setFormErrors(null)
        try {
            const userData = await onLogin(formValue)
            if (userData !== null) {
                auth?.setAuth(userData)
                navigate('/')
            }
        } catch (err: any) {
            const message = err.message
            setFormErrors({ formError: message })
        }
    }

    return (
        <div className='flex justify-center justify-items-center items-center bg-gray-200 h-screen'>
            <div className='bg-white shadow-lg text-center rounded-[10px]'>
                <form method="post" onSubmit={handleSubmit} className="flex flex-col pt-[16dvh] pl-[50px] pr-[50px] pb-[22dvh] gap-5">
                    <h1 className="font-bold text-3xl">Login</h1>
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-15px' }}>{formErrors?.formError}</div>
                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-[3.5px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            name="email"
                            placeholder="Email"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message">{formErrors?.email}</p>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[300px]">
                        <input
                            className="p-1.5 pl-3 rounded-[3.5px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message">{formErrors?.password}</p>
                    </div>

                    <button type="submit" className="mt-7 text-white bg-orange-400 border border-primary mx-auto p-2 rounded-[5px] w-[300px] hover:bg-black duration-500">Login</button>
                </form>
            </div>
        </div>
    )
}
