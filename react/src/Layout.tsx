import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
        </>
    )
}
