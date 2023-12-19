import React, { useState } from "react";
import "./sidebar.styles.css";

const SideBar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(50); // Initial width of the sidebar

    const handleSidebarOpen = () => {
        setSidebarWidth(250); // Set the sidebar width to 250px when opened
    };

    const handleSidebarClose = () => {
        setSidebarWidth(50); // Set the sidebar width back to its initial width when closed
    };

    return (
        <div className="sidebar-container" style={{ width: `${sidebarWidth}px` }}>
            <div className="upper-sidebar" onMouseEnter={handleSidebarOpen} onMouseLeave={handleSidebarClose}>
                <svg fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
                    <path d="M 4 5 L 4 11 L 5 11 L 5 27 L 27 27 L 27 11 L 28 11 L 28 5 Z M 6 7 L 26 7 L 26 9 L 6 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 12.8125 13 C 12.261719 13.050781 11.855469 13.542969 11.90625 14.09375 C 11.957031 14.644531 12.449219 15.050781 13 15 L 19 15 C 19.359375 15.003906 19.695313 14.816406 19.878906 14.503906 C 20.058594 14.191406 20.058594 13.808594 19.878906 13.496094 C 19.695313 13.183594 19.359375 12.996094 19 13 L 13 13 C 12.96875 13 12.9375 13 12.90625 13 C 12.875 13 12.84375 13 12.8125 13 Z" />
                </svg>
            </div>
            <div className="lower-sidebar">
                <p>Ghana is a very peaceful country</p>
            </div>
        </div>
    );
};

export default SideBar;
