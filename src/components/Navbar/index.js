import React from 'react'
import {  Link } from "react-router-dom";
import {NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


export const Navbar = () => {
    return (
      <Navbar>
          <NavLink>
              <Link to="/get-to-know-me">Get To Know Me</Link>
          </NavLink>
          <NavLink>
              <Link to="/my-work">My Work</Link>
          </NavLink>
          <NavLink>
              <Link to="/skills-experience">Skills/Experience</Link>
          </NavLink>
          <NavLink>
              <Link to="/reach-out">Reach Out</Link>
          </NavLink>
      </Navbar>
    )
  }