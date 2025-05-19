import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
type UserBarProps = {
    handleLogout: () => Promise<void>;
};

export default function UserBar({ handleLogout }: UserBarProps) {
    return (
        <>
            <Link to={'/profile'} className="flex w-full -ml-2 p-4 max-w-[120px] flex-row text-center items-center justify-start gap-3">
                <CgProfile className="text-black text-md" />
                <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
                    Profile
                </p>
            </Link>
            <Link to={'/create'} className="flex w-full -ml-2 p-4  max-w-[120px] flex-row text-center items-center justify-start gap-3">
                <IoIosCreate className="text-black text-md" />
                <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
                    Create
                </p>
            </Link>
            <li onClick={async () => { await handleLogout() }} className="flex w-full -ml-2 p-4 max-w-[120px] flex-row text-center items-center justify-start gap-3">
                <RiLogoutBoxLine className="text-black text-md" />
                <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
                    Logout
                </p>
            </li>
        </>
    )
}
