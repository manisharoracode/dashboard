import { AiFillDashboard, AiOutlineSecurityScan, AiFillTool, AiFillSetting } from "react-icons/ai";
import {  BsGraphUpArrow, BsFillPersonFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <>
            <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
                <div className="sidebar-title">

                    <span className="close-icon" onClick={OpenSidebar}>X</span>
                </div>
                <div className="d-flex justify-content-between flex-column">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <AiFillDashboard className="icon me-1" />  <Link to={"/"} className='text-white'>Dashboard</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <AiOutlineSecurityScan className="icon me-1" /> <Link to={"/Scanning"} className='text-white'>Scanning</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <TbReportAnalytics className="icon me-1" />  <Link to={"/Results"} className='text-white'>Results</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <BsGraphUpArrow className="icon me-1" />  <Link to={"/Reporting"} className='text-white'>Reporting</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <AiFillTool className="icon me-1" />  <Link to={"/Patching"} className='text-white'>Patching</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <BsFillPersonFill className="icon me-1" />  <Link to={"/Administration"} className='text-white'>Administration</Link>
                        </li>
                        <li className="sidebar-list-item">
                            <AiFillSetting className="icon me-1" /> <Link to={"/Configuration"} className='text-white'>Configuration</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;