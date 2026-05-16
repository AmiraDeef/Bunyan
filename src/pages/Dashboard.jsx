import {Routes,Route} from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebare from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import ProjectPage from "./ProjectPage";
import UserPage from "./UserPage";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormalDashboard from "../components/ui/FormDashboard/FormalDashboard";
import DeveloperPage from "./DeveloperPage";
function Dashboard() {
    return (
        <>
            <Navbar adminName="mohamed" />
            <div className="d-flex">
                <Sidebare />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<StatusPage/>} />
                        <Route path="/users" element={<UserPage />} >
                           <Route index element={<TableDashboard header="User" />} />
                           <Route path="add" element={<FormalDashboard/>} />

                        </Route>

                        <Route path="/projects" element={<ProjectPage/>} >
                           <Route index element={<TableDashboard header="Project" />} />
                           <Route path="add" element={<FormalDashboard/>} />

                        </Route>

                        
                           <Route path="/developers" element={<DeveloperPage/>} >
                           <Route index element={<TableDashboard  header="Developer"/>} />
                           <Route path="add" element={<FormalDashboard/>} />

                        </Route>

                      

                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;