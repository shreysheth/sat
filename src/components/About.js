import React from "react";
import { TiTick } from "react-icons/ti";
import CountUp from "react-countup";

const About = () => {
	return (
		<div className="about">
			<div className="about-grid">
				<div className="about-para">
					<p className="about-heading">
						<strong>About Shri Ambika Tools</strong>
					</p>
					<br />
					<p className="about-content">
						Welcome to Shri Ambika Tools, your number one source for
						Hardware Tools. We're dedicated to providing you with a
						large range of products, with a focus on quality and
						precision. <br />
						<br />
						Founded in 2020, Shri Ambika Tools has come a long way
						from its beginnings in Gujarat. When we first started
						out, our passion for quality business drove us to days
						of strategic planning so that we can offer you one of
						the most satisfactory product experiences. We now serve
						customers all over India. <br />
						<br />
						We hope you enjoy our products as much as we enjoy
						offering them to you. If you have any inquiries,
						questions or comments, please don't hesitate to{" "}
						<span>contact us</span>. <br />
						<br />
						Sincerely,
						<br />
						Amit Sheth,
						<br />
						Founder, Shri Ambika Tools.
					</p>
				</div>
				<div className="about-video">
					<iframe
						src="https://www.youtube.com/embed/BUjXzrgntcY"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="about-photo">
					<img src={require("./img/hero-bg.jpeg")} />
				</div>
				<div className="about-features">
					<p className="about-heading">
						<strong>Why Shri Ambika Tools?</strong>
					</p>
					<br />
					<p className="about-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ut metus id felis pretium condimentum at non urna.
						Aliquam sagittis consectetur vestibulum. In tempus enim
						et felis scelerisque mattis. Duis placerat blandit est,
						vitae tempus metus fringilla cursus.
						<br />
						<br />
						<TiTick className="ticks" /> Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						<br />
						<br />
						<TiTick className="ticks" /> Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						<br />
						<br />
						<TiTick className="ticks" /> Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						<br />
						<br />
						<TiTick className="ticks" /> Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
						<br />
						<br />
						<TiTick className="ticks" /> Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
				</div>
			</div>
			<div className="about-infographics">
				<div className="counter">
					<strong>
						<CountUp className="countup" end={100} duration={2} />+
						<p>counter here</p>
					</strong>
				</div>
				<div className="counter">
					<strong>
						<CountUp className="countup" end={100} duration={2} />
						<p>counter here</p>
					</strong>
				</div>
				<div className="counter">
					<strong>
						<CountUp className="countup" end={100} duration={2} />
						<p>counter here</p>
					</strong>
				</div>
				<div className="counter">
					<strong>
						<CountUp className="countup" end={100} duration={2} />
						<p>counter here</p>
					</strong>
				</div>
			</div>
		</div>
	);
};

export default About;
