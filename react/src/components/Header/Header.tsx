import { useContext, useState } from "react"

import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { AuthContext } from "../../context/AuthContext";

import { onLogout } from "../../service/authService";

import * as FaIcons from "react-icons/fa";
import { MdHideSource } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

import UserBar from "./UserBar";
import GuestBar from "./GuestBar";

export default function Header() {

    const authContext = useContext(AuthContext)

    const [sideBar, setSideBar] = useState<boolean>(false)
    const [showLiked, setShowLiked] = useState<boolean>(false)

    async function handleLogout(): Promise<void> {
        try {
            await onLogout()
            authContext?.setAuth(null)
        } catch (error) {
            authContext?.setAuth(null)
            console.log('logout error')
        }
    }

    return (
        <>
            <nav className="fixed justify-between z-50 w-screen bg-gray-200 pb-3 pt-2 pl-1.5 cursor-default">

                <div className="flex justify-between">
                    <div className="w-auto">
                        {sideBar
                            ? <MdHideSource className="text-[32px] z-40 w-[50px] cursor-pointer duration-500 text-black " onClick={() => setSideBar(false)} />
                            : <FaIcons.FaBars className="text-[30px] z-40 w-[50px] cursor-pointer duration-500 text-black " onClick={() => setSideBar(true)} />
                        }
                    </div>
                    <div className="relative -left-3" onClick={() => { setShowLiked(!showLiked) }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 24"
                            fill={showLiked ? `#f1f5f9` : 'black'}
                            stroke="black"
                            strokeWidth="1"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21C12 21 4 13.7 4 8.5C4 5.4 6.4 3 9.5 3C11.2 3 12.7 3.9 13.5 5.2C14.3 3.9 15.8 3 17.5 3C20.6 3 23 5.4 23 8.5C23 13.7 15 21 15 21H12Z"
                            />
                        </svg>
                    </div>
                </div>

            </nav>
            <AnimatePresence>
                {sideBar &&

                    <motion.div
                        initial={{ left: -200 }}
                        animate={{ left: 0 }}
                        exit={{ left: -250 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}

                        className="absolute left-0 cursor-default bg-gray-200 h-[100%] w-[20%] max-w-[220px] min-w-[190px]  z-40" style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)' }}>
                        <ul className="mt-2  p-10 flex flex-col justify-between">

                            <Link to={'/'} className="flex w-full max-w-[120px] -ml-3 p-5 flex-row text-center items-center justify-start gap-3">
                                <IoHomeOutline className="text-black text-md" />
                                <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
                                    Home
                                </p>
                            </Link>

                            {authContext?.auth ? <UserBar handleLogout={handleLogout} /> : <GuestBar />}

                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
