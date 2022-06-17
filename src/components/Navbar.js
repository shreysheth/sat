import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	return (
		<div className="header">
			<nav className="navbar-main">
				<div className="logo-section">
					<a href="#">
						<img
							src={require("./img/satlogo.png")}
							className="nav-logo"
							alt="logo here"
						/>
					</a>
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
							<a
								href="#home"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Products
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={() => {
									setShowMediaIcons(!showMediaIcons);
								}}
							>
								Contact
							</a>
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
