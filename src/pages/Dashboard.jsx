import {Routes,Route} from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebare from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import ProjectPage from "./ProjectPage";
import UserPage from "./UserPage";
function Dashboard() {
    return (
        <>
            <Navbar adminName="mohamed" />
            <div className="d-flex">
                <Sidebare />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<StatusPage/>} />
                        <Route path="/users" element={<UserPage/>} />

                        <Route path="/projects" element={<ProjectPage/>} />

                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;