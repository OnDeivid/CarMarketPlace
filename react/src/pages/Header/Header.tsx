import { useState } from "react"

import { MdHideSource } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
// import { IoIosLogIn } from "react-icons/io";
// import { RiLogoutBoxLine } from "react-icons/ri";



import * as FaIcons from "react-icons/fa";


export default function Header() {

    const [sideBar, setSideBar] = useState<boolean>(false)

    return (
        <>
            <nav className="fixed z-20 w-screen bg-background p-4 cursor-default" style={{ boxShadow: '0px 0px 19px 0px rgba(0, 0, 0, 0.80)' }}>
                <div className="w-auto">
                    {sideBar
                        ? <MdHideSource className="text-2xl w-[50px] cursor-pointer text-primary" onClick={() => setSideBar(false)} />
                        : <FaIcons.FaBars className="text-2xl w-[50px] cursor-pointer text-primary" onClick={() => setSideBar(true)} />
                    }
                </div>

            </nav>
            {sideBar &&
                <div className="absolute left-0 cursor-default bg-background h-[100%] w-[20%] max-w-[250px] min-w-[190px]  z-10" style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)' }}>
                    <ul className="mt-12 flex flex-col justify-evenly font-medium">

                        <li className="flex p-8 flex-row text-center items-center justify-evenly">
                            <IoHomeOutline className="text-white font-bold text-xl" />
                            <p className="text-white text-md">
                                Home
                            </p>
                        </li>
                        <li className="flex p-8 flex-row text-center items-center justify-evenly">
                            <CgProfile className="text-white font-bold text-xl" />
                            <p className="text-white text-md">
                                Profile
                            </p>
                        </li>
                        <li className="flex p-8 flex-row text-center items-center justify-evenly">
                            <IoIosCreate className="text-white font-bold text-xl" />
                            <p className="text-white text-md">
                                Create
                            </p>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}
