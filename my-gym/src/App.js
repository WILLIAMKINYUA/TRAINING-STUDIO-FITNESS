import {BrowserRouter as Router,Route,Switch}from "react-router-dom"
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CLasses from "./Pages/Classes/Classes";
import Shedules from "./Pages/Shedules/Shedules";
import Nav from "./Component/Nav";
import SignUp from "./Component/SignUp";

import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";


function App() {
  return (
    <div className="App">
     <Router><Nav/>
      <Switch>
      <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/classes"><CLasses/></Route>
        <Route path="/shedules"><Shedules/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/signin"><SignIn/></Route>
      </Switch><Footer/>
     </Router>
    </div>
  );
}

export default App;
