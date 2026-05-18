import "./App.css";
import Dashboard from "./pages/Dashboard";
import StatusPage from "./pages/StatusPage";
import ProjectPage from "./pages/ProjectPage";
import UserPage from "./pages/UserPage";
import TableDashboard from "./components/ui/TableDashboard/TableDashboard";
import FormalDashboard from "./components/ui/FormDashboard/FormalDashboard";
import DeveloperPage from "./pages/DeveloperPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<StatusPage />} />
        <Route path="users" element={<UserPage />} >
          <Route index element={<TableDashboard header="User" />} />
          <Route path="add" element={<FormalDashboard />} />

        </Route>

        <Route path="projects" element={<ProjectPage />} >
          <Route index element={<TableDashboard header="Project" />} />
          <Route path="add" element={<FormalDashboard />} />

        </Route>


        <Route path="developers" element={<DeveloperPage />} >
          <Route index element={<TableDashboard header="Developer" />} />
          <Route path="add" element={<FormalDashboard />} />

        </Route>

        </Route>

      </Routes>
    </>
  );
}

export default App;
