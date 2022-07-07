import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./components/Navbar.css";
import "./components/About.css";
import "./components/Contact.css";
import "./components/Home.css";
import "./components/Product.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<section id="nav">
					<Navbar />
				</section>
				{/* <section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="contact">
				<Contact />
			</section> */}

				<Routes>
					<Route id="home" path="home" element={<Home />}></Route>
					<Route id="about" path="about" element={<About />}></Route>
					<Route
						id="product"
						path="product"
						element={<Product />}
					></Route>
					<Route
						id="contact"
						path="contact"
						element={<Contact />}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
