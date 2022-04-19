import React from "react";
import st from "./Header.module.css"

const Header = () => {
    return (
        <header className={st.header}>
            <img
                src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mr-bread-logo-design-template-8a8bf7264deccf537f8dd318785ebd6f_screen.jpg?ts=1579209248'/>
        </header>
    );
}

export default Header;