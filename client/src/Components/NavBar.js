import React from "react";
import logo from "../nt.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar} from "react-bootstrap";

function NavBar() {
	return (
		<div className="App">
			<Navbar className="theBar"
				sticky="top"
				expand="sm" 
				collapseOnSelect
			>
				<Navbar.Brand>
					<img src={logo} width="70px" height="60px" />{" "}
				</Navbar.Brand>
				<Navbar.Toggle className="coloring" />
				<Navbar.Collapse>
					<Nav>
						<ul className="navbar-nav mr-auto">
							<Link to="/Lawyer">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Lawyers/Experts
									</a>
								</li>
							</Link>
							<Link to="/Native">
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
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
export default NavBar;
