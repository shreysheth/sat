import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	return (
		<div className="header">
			<nav className="navbar-main">
				<div className="logo-section">
					<Link to="home">
						<img
							src={require("./img/satlogo.png")}
							className="nav-logo"
							alt="logo here"
						/>
					</Link>
				</div>
				<div
					className={
						showMediaIcons
							? "menu-section mobile-menu-section"
							: "menu-section"
					}
				>
					<ul>
						<li>
							<Link
								to="home"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="about"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="product"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Products
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="social-links">
					<ul className="social-media-desktop">
						<li>
							<a href="https://www.facebook.com/shriambikatools/">
								<FaFacebook className="facebook" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/shriambikatools/">
								<AiFillInstagram className="instagram" />
							</a>
						</li>
						<li>
							<a href="#">
								<FaYoutube className="youtube" />
							</a>
						</li>
						{/* <li>
							<p>
								<BsFillMoonStarsFill className="darkmode" />
							</p>
						</li> */}
					</ul>
					<div className="hamburger-menu">
						<p onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<RiMenu4Fill className="hamburger" />
						</p>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
