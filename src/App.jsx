import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Works from "./Components/Works";
import StudyCase from "./Components/StudyCase";


function App() {

  return ( 
    <div>
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>        
          <Route path="/works" exact component={Works}/>
          <Route path="/works/:name-study-case" component={StudyCase} />     
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
