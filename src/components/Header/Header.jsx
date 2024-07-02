import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";


function Header(params) {
	return (
		<div className="header-container">
			<h1>Dostonbek</h1>

			<div className="navigations">
				<NavLink className='link' to='/'>Home</NavLink>
				<NavLink className='link' to='/project'>Project</NavLink>
				<NavLink className='link' to='/about'>About</NavLink>
				<NavLink className='link' to='/contact'>Contact</NavLink>
			</div>
		</div>
	)
}

export default Header