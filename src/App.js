import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Home from "./components/Home";
import "./components/Home.css";
import "./components/About.css";
import "./components/Contact.css";
import About from "./components/About";
import Contact from "./components/Contact";

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
