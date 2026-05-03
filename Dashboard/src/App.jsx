import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import NotFound from './pages/NotFond/NotFound';
import Layout from './components/layout/Layout';
import Developers from './pages/Developers/Developers';
import './App.css';




function App() {

  return (
    <>
      

      <Routes>

      <Route path="/" element={<Layout />}>
      
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
           <Route path="/developers" element={<Developers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>

    </>
  );
}

export default App
