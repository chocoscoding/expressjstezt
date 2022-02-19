import React from "react";
import Nav from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Nav.mainbody}>
      <img src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Asset%201.png?alt=media&token=0fa09102-68ee-4b07-98a3-cf13cce169c0" alt="logo" className={Nav.logo} /> 
      
    </nav>
  );
};

export default Navbar;
