import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../styles/navbar.module.css";
import {AiFillGithub, AiOutlineCloseCircle, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [navstatus, setNavstatus] = useState(true)
  const [currentn, setCurrentn] = useState({
    home: true,
    guide: false,
  });

  function changec(param) {
    if (param === "home") {
      setCurrentn({
        home: true,
        guide: false,
      });
    } else {
      setCurrentn({
        home: false,
        guide: true,
      });
    }
  }

  return (
    <nav className={Nav.mainbody}>
      <div className={Nav.wrapper}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/Asset%201.png?alt=media&token=0fa09102-68ee-4b07-98a3-cf13cce169c0"
        alt="logo"
        className={Nav.logo}
      />
      <ul className={`${!navstatus? Nav.ul : (`${Nav.ul} ${Nav.navhide}` )}`}>
        <li onClick={()=> changec('home')}>
          <Link to={`/`}>Home</Link>
          <span className={`${currentn.home ? Nav.underlu : Nav.underl}`}></span>
        </li>
        <li onClick={()=> changec('guide')}>
          <Link to={`/guides`}>Guides</Link>

          <span className={`${currentn.guide ? Nav.underlu : Nav.underl}`}></span>
        </li>
        <li>
          <a
            target={`blank`}
            href={`https://github.com/chocoscoding/expressjstezt`}
          >
            <AiFillGithub className={Nav.repo}/>
          </a>
          <span className={Nav.underl}></span>
        </li>
      </ul>

      <div className={Nav.menubox}>
        {
          navstatus? (<AiOutlineMenu onClick={()=>{setNavstatus(!navstatus)}}/>) : (<AiOutlineCloseCircle onClick={()=>{setNavstatus(!navstatus)}}/>)
        }
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
