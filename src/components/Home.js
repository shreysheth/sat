import React from "react";

const Home = () => {
	return (
		<div className="home">
			<div className="home-inner">
				<img className="logo-main" src={require("./img/satlogo.png")} />
				<h1 className="company-name">
					<span>S</span>hri <span>A</span>mbika <span>T</span>ools
				</h1>
				<div className="grid-box">
					<div className="hero-usp">
						<p>USP 1</p>
					</div>
					<div className="hero-usp">
						<p>USP 2</p>
					</div>
					<div className="hero-usp">
						<p>USP 3</p>
					</div>
					<div className="hero-usp">
						<p>USP 4</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
