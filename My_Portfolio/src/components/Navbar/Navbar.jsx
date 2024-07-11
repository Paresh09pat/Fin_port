import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="navbar"
        >
            <div id="main_div1" style={{color:"white"}}>Logo</div>

            <div id="main_div2">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="active">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/technology" className="nav-link" activeClassName="active">Technology</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact Us</NavLink>
                    </li>
                </ul>
            </div>


        </motion.nav>
    );
};

export default Navbar;
