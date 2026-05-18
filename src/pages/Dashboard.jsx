import { Outlet, Routes, Route } from "react-router-dom"
import { createContext, useState } from "react";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebare from "../components/Dashborad/Sidebar/Sidebar";
;
function Dashboard() {
    const [active, setActive] = useState("none");
    return (
        <>
            <Navbar adminName="Amira" />
            <div className="d-flex">
                <Sidebare active={active} />
            <main className="flex-grow-1">
                <Outlet context={setActive}/>
            </main>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;