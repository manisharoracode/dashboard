import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import DashboardMain from './SidebarPages/DashboardMain';
import { useState } from 'react';
import { Scanning } from './SidebarPages/Scanning';
import { Results } from './SidebarPages/Results';
import { Reporting } from './SidebarPages/Reporting';
import { Patching } from './SidebarPages/Pating';
import { Administration } from './SidebarPages/Admin';
import { Configuration } from './SidebarPages/Configuration';
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
     <BrowserRouter>
      <div className="App">
        <Header OpenSidebar={OpenSidebar} />
        <div className='grid-container'>
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <Routes>
            <Route path="/" element={<DashboardMain />} />
            <Route path="/Scanning" element={<Scanning />} />
            <Route path="/Results" element={<Results />} />
            <Route path="/Reporting" element={<Reporting />} />
            <Route path="/Patching" element={<Patching />} />
            <Route path="/Administration" element={<Administration />} />
            <Route path="/Configuration" element={<Configuration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
