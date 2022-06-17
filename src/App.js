import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Home from "./components/Home";
import "./components/Home.css";
import "./components/About.css";
import About from "./components/About";

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
		</div>
	);
}

export default App;
