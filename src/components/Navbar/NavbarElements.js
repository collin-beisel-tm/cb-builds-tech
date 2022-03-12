import React from 'react'
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const backgroundColor = "#fff";
const primaryColor= "#848e86";
const secondaryColor= "#d1691c";
const tertiaryColor= "#2c2d2c";

export const Navbar = styled.nav`
    background: ${backgroundColor};
    margin-top: 2vw;
    height: 2.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    padding: 10px 10px;
    margin: 0 7px;
    font-weight: bold;
    font-size: 1.2vw;
    color: ${primaryColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 25px;
    border: solid ${secondaryColor};
    border-width: thin;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color: ${secondaryColor};
    border-radius: 25px;
    border: solid ${primaryColor};
    text-shadow: none;
    };
    &:hover {
        color: ${secondaryColor};
        border-radius: 25px;
        border: solid ${primaryColor};
        text-shadow: none;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: ${secondaryColor};
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
