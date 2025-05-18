import { Link } from "react-router-dom";

import { IoIosLogIn } from "react-icons/io";

export default function GuestBar() {
  return (
    <>
      <Link to={'/login'} className="flex w-full -ml-3 p-5 max-w-[120px] flex-row text-center items-center justify-start gap-3">
        <IoIosLogIn className="text-black text-md" />
        <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
          Login
        </p>
      </Link>

      <Link to={'/register'} className="flex w-full -ml-3 p-5 max-w-[120px] flex-row text-center items-center justify-start gap-3">
        <IoIosLogIn className="text-black text-md" />
        <p className="text-black text-md hover:text-primary cursor-pointer duration-200">
          Regist
        </p>
      </Link>
    </>
  )
}
