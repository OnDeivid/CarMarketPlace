import useForm from "../../hooks/useForm";
import React, { useContext } from "react"
import { AuthContext, AuthContextType, UserData } from "../../context/AuthContext";
import { onLogin } from "../../service/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const auth = useContext(AuthContext)
    const [formValue, onChangeFormValue] = useForm({ email: '', password: '' })
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const userData = await onLogin(formValue)
            if (userData !== null) {
                auth?.setAuth(userData)
                navigate('/')
            }
        } catch (err) {
            console.log('ERROR in login !!!')
        }
    }

    return (
        <div className='flex justify-center justify-items-center items-center bg-loginBackground h-screen'>
            <div className='bg-white shadow-lg text-center rounded-[10px]'>
                <form method="post" onSubmit={handleSubmit} className="flex flex-col pt-[16dvh] pl-[50px] pr-[50px] pb-[22dvh] gap-5">
                    <h1 className="font-bold text-3xl">Login</h1>
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-15px' }}></div>
                    <div className="flex flex-col gap-1">
                        <input
                            className="p-1.5 pl-3 rounded-sm min-w-[300px] bg-background text-primary"
                            onChange={onChangeFormValue}
                            type="text"
                            name="email"
                            placeholder="Email"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message"></p>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[300px]">
                        <input
                            className="p-1.5 pl-3 rounded-sm bg-background text-primary"
                            onChange={onChangeFormValue}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message"></p>
                    </div>

                    <button type="submit" className="mt-10 border border-background mx-auto p-2 rounded-[30px] w-[100px]">Login</button>
                </form>
            </div>
        </div>
    )
}
