import React from "react";
import logo from "../nt.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NavBar = () => {
	return (
		
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img src={logo} alt="logo..." style={{width: "150px"}}/>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<Link to="/Lawyer">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Lawyer/Expert
						</a>
					</li>
					</Link>
					<Link to ="/Native">
                    <li className="nav-item">
						<a className="nav-link" href="#">
							Native
						</a>
					</li>
					</Link>
					<Link to="/About">
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					</Link>
				</ul>
			</div>
					</nav>
	
	);
};

export default NavBar;
