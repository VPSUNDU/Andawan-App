
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Header from './Components/Header';
import Native from './Components/Native';
import Lawyer from './Components/Lawyer';
import About from './Components/About';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
      <Switch>
      <Route path="/" exact component={Header}/>
        <Route path="/About" component={About}/>
        <Route path="/Native" component={Native}/>
        <Route path="/Lawyer" component={Lawyer}/>
        <Route path="/Native/:id" component={Lawyer}/>
      </Switch>
    </Router>
  );
}

export default App;