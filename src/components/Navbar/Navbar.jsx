import React from "react";
import "./Navbar.css";
import TANVI from "../../assets/TANVI.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
   const closeMenu = () => {
     menuRef.current.style.right = "-350px";
   };
  return (
    <div className="navbar">
      <img className="logo" src={TANVI} alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open"></img>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p>HOME</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>ABOUT ME</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p>PROJECTS</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>CONTACT ME</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="connect">
        <AnchorLink className="anchor-link" offset={50} href="#fot">
          CONNECT WITH ME
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
