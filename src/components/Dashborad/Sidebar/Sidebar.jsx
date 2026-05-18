import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css"

function Sidebar({ active }) {
    const links = [
        { icon: "fa-chart-bar", title: "Status", path: "/" },
        { icon: "fa-users", title: "User Management", path: "/users" },
        { icon: "fa-building", title: "Projects Management", path: "/projects" },
        { icon: "fa-user", title: "Developer Management", path: "/developers" },
        { icon: "fa-globe", title: "CMS" },
        { icon: "fa-message", title: "Live chat", path: "" },

    ]
   
    

    return (

        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div className="fw-semibold px-5 mb-3 fs-4 opacity-50 ">Dashboard </div>

            {/* links parent */}
            <nav>
                {links.map((item, index) => (
                    <NavLink to={item.path} className={`${styles.navItem} position-relative d-flex align-items-center gap-3 py-3 px-4`} key={index}>

                        <i className={`fa-solid ${item.icon} fs-6`}></i>
                        <span>{item.title}</span>
                        {active  && (
                            <span 
                                className={`${styles.badge} position-absolute translate-middle p-2 bg-danger rounded-circle`}>
                            </span>
                        )}

                    </NavLink>
                ))}

            </nav>
        </aside>

    )
}

export default Sidebar;