import "./App.css";
import NavBar from "./Components/NavBar";
import Native from "./Components/Native";
import Lawyer from "./Components/Lawyer";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={About} />
				<Route path="/About" component={About} />
				<Route path="/Native" component={Native} />
				<Route path="/Lawyer" component={Lawyer} />
				<Route path="/Native/:id" component={Lawyer} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
