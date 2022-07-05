import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./components/Navbar.css";
import "./components/About.css";
import "./components/Contact.css";
import "./components/Home.css";

function App() {
	return (
		<div className="App">
			<section id="nav">
				<Navbar />
			</section>
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
