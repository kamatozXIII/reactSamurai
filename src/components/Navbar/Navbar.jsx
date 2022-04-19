import React from "react";
import st from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={st.nav}>
        <div className={st.item}>
          <a href="/profile">Profile</a>
        </div>
        <div className={`${st.item} ${st.active}`}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className={st.item}>
          <a>News</a>
        </div>
        <div className={st.item}>
          <a>Music</a>
        </div>
        <div>
          <a className={st.item}>Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;