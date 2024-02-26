import React, { useState } from "react";
import "../styles/pages/SideMenu.css"
import { NavLink } from 'react-router-dom';
import {
    FaScroll,
    FaBars,
    FaHome,
} from 'react-icons/fa'

// side menu component for easy navigation
const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const menuItem = [
        {
            path: "",
            name: "Laws",
            icon: <FaScroll/>,
        },
        {
            path: "/FileUploader",
            name: "File Uploader",
            icon: <FaHome/>,
        },
    ];

    return (
        <div className="container">
            <div className="sidemenu" style={{width: isOpen ? "250px" : "50px"}}>
                <div className="top_section"  onClick={toggle}>
                    <div  className="bars" style={{marginRight: isOpen ? "30px" : "0px"}}>
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={`${item.path}_${index}`}
                            className={({ isActive }) => isActive? "link active": "link"}
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            
        </div>
    )
};
  

export default SideMenu;