import { BsPersonCircle, BsSearch, BsFillQuestionCircleFill, BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";


function Header({ OpenSidebar }) {
    return (
        <>
            <header className="header">
                <div className="menu-icon">
                    <GiHamburgerMenu className="icon" onClick={OpenSidebar} /> <span className='hm-heading'>Software Vulneability Manager</span>
                </div>

                <div className='header-right d-flex'>
                    <div className='help-container d-flex'>
                        <span >  <BsFillQuestionCircleFill /></span>

                        <p className='ms-2'>Help</p>
                    </div>
                    <div className='dev-container d-flex mx-3'>
                        <span><BsFillPersonFill /></span>
                        <p className='ms-2'>Dev-test</p>
                    </div>
                    <div className='logout-container d-flex'>
                        <span><svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>logout</title> <path d="M0 9.875v12.219c0 1.125 0.469 2.125 1.219 2.906 0.75 0.75 1.719 1.156 2.844 1.156h6.125v-2.531h-6.125c-0.844 0-1.5-0.688-1.5-1.531v-12.219c0-0.844 0.656-1.5 1.5-1.5h6.125v-2.563h-6.125c-1.125 0-2.094 0.438-2.844 1.188-0.75 0.781-1.219 1.75-1.219 2.875zM6.719 13.563v4.875c0 0.563 0.5 1.031 1.063 1.031h5.656v3.844c0 0.344 0.188 0.625 0.5 0.781 0.125 0.031 0.25 0.031 0.313 0.031 0.219 0 0.406-0.063 0.563-0.219l7.344-7.344c0.344-0.281 0.313-0.844 0-1.156l-7.344-7.313c-0.438-0.469-1.375-0.188-1.375 0.563v3.875h-5.656c-0.563 0-1.063 0.469-1.063 1.031z"></path> </g></svg> </span>
                        <p className='ms-2'>Logout</p>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;