import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Home from "./components/Home";
import "./components/Home.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<section id="home">
				<Home />
			</section>
		</div>
	);
}

export default App;
