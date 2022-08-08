import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState("false");

	const toggleHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="Dream hotels" />
					</Link>
					<button type="button" className="nav-btn" onClick={toggleHandler}>
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
                <ul className={isOpen?"nav-links show-nav":"nav-links"}>

                </ul>
			</div>
		</nav>
	);
};

export default Navbar;
