import "./App.css";
import NavBar from "./Components/NavBar";
import Native from "./Components/Native";
import Lawyer from "./Components/Lawyer";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Home" component={Home} />
				<Route path="/Native" component={Native} />
				<Route path="/Lawyer" component={Lawyer} />
				<Route path="/Native/:id" component={Lawyer} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
