import useForm, { RegisterForm } from "../../hooks/useForm";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onRegister } from "../../service/authService";

import formValidation from "../../utils/formValidation";

export default function Register() {
    const [formValue, onChangeFormValue] = useForm<RegisterForm>({ email: '', profileIcon: '', username: '', number: 0, password: '', rePassword: '' })
    const [formErrors, setFormErrors] = useState<Record<string, string> | null>(null)
    const navigate = useNavigate()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()

        let error = formValidation<RegisterForm>(formValue)
        if (Object.values(error).length > 0) {
            setFormErrors(error)
            return
        }
        setFormErrors(null)
        try {
            await onRegister(formValue)
            navigate('/login')

        } catch (err: any) {
            const message = err.message
            setFormErrors({ formError: message })
        }
    }

    return (
        <div className='flex justify-center justify-items-center items-center bg-gray-200 h-screen'>
            <div className='bg-white shadow-lg text-center rounded-[10px] mt-[23px]'>
                <form method="post" onSubmit={handleSubmit} className="flex flex-col pt-[5dvh] md:pl-[50px] md:pr-[50px] sm:pr-[50px] sm:pl-[50px] pr-[30px] pl-[30px] pb-[5dvh] gap-5">
                    <h1 className="font-bold text-3xl">Register</h1>
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-1px' }}>{formErrors?.formError}</div>

                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-[3.5px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            name="email"
                            value={formValue.email}
                            placeholder="Email"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-2px' }} className="error-message">{formErrors?.email}</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-[4px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            name="username"
                            value={formValue.username}
                            placeholder="Username"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-2px' }} className="error-message">{formErrors?.username}</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-[4px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            name="number"
                            value={formValue.number}
                            placeholder="897774583"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-2px' }} className="error-message">{formErrors?.number}</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-[4px] min-w-[300px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            value={formValue.profileIcon}
                            name="profileIcon"
                            placeholder="http://........png"
                        />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-2px' }} className="error-message">{formErrors?.profileIcon}</p>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[300px]">
                        <input
                            className="p-1.5 pl-3 rounded-[4px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="password"
                            name="password"
                            value={formValue.password}
                            placeholder="Password"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-2px' }} className="error-message">{formErrors?.password}</p>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[300px]">
                        <input
                            className="p-1.5 pl-3 rounded-[4px] bg-white border border-background text-primary"
                            onChange={onChangeFormValue}
                            type="password"
                            name="rePassword"
                            value={formValue.rePassword}
                            placeholder="Repeat Password"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-4px' }} className="error-message">{formErrors?.rePassword}</p>
                    </div>

                    <button type="submit" className="mt-7 text-white bg-orange-400 border border-primary mx-auto p-2 rounded-[5px] w-[300px] hover:bg-black duration-500">Login</button>
                </form>
            </div>
        </div>
    )
}
