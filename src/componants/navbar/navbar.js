import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<header className="head">
			<h1 id="title">Shauna N Larkin</h1>
			<h1 id="subtitle"> Dream's of Ayame</h1>
			<nav className="navigation">
				<Link to="/">About</Link>
				<span> |</span>
				<Link to="/contact">Contact</Link>
				<span> |</span>
				<Link to="/portfolio">Portfolio</Link>
			</nav>
		</header>
	);
}

export default Navbar;
