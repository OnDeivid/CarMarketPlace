import { useContext, useState } from "react"

import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { CiHeart } from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import { MdHideSource } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

import UserBar from "./UserBar";
import GuestBar from "./GuestBar";

export default function Header() {
    const authContext = useContext(AuthContext)

    const [sideBar, setSideBar] = useState<boolean>(false)

    return (
        <>
            <nav className="fixed justify-between z-50 w-screen bg-gray-200 pb-3 pt-2 pl-1.5 cursor-default">

                <div className="flex justify-between">
                    <div className="w-auto">
                        {sideBar
                            ? <MdHideSource className="text-[32px] z-40 w-[50px] cursor-pointer duration-500 text-black hover:text-gray-300" onClick={() => setSideBar(false)} />
                            : <FaIcons.FaBars className="text-[30px] z-40 w-[50px] cursor-pointer duration-500 text-black hover:text-gray-300" onClick={() => setSideBar(true)} />
                        }
                    </div>
                    <CiHeart className="text-[32px] w-[50px] cursor-pointer duration-200 text-black" />
                </div>

            </nav>
            {sideBar &&
                <div className="absolute left-0 cursor-default bg-gray-200 h-[100%] w-[20%] max-w-[220px] min-w-[190px]  z-40" style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)' }}>
                    <ul className="mt-2  p-10 flex flex-col justify-between">

                        <Link to={'/'} className="flex w-full max-w-[120px] -ml-3 p-5 flex-row text-center items-center justify-start gap-3">
                            <IoHomeOutline className="text-black text-md" />
                            <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
                                Home
                            </p>
                        </Link>

                        {authContext?.auth ? <UserBar /> : <GuestBar />}

                    </ul>
                </div>
            }
        </>
    )
}
