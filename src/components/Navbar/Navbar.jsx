import React from "react";
import st from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? st.active : st.item}>Profile</NavLink>
            </div>
            <div className={`${st.item} ${st.active}`}>
                <NavLink to="/dialog" className={navData => navData.isActive ? st.active : st.item}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to="/news" className={navData => navData.isActive ? st.active : st.item}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to="/music" className={navData => navData.isActive ? st.active : st.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={navData => navData.isActive ? st.active : st.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;