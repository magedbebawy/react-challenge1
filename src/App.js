import Counter from "./components/Counter";
import FetchApi from "./components/FetchAPI";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import Challenge1 from "./components/Challenge1";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/' style={{margin: '40px', fontSize: '25px'}}>Home</Link>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/counter' component={Counter}></Route>
          <Route path='/fetchapi' component={FetchApi}></Route>
          <Route path='/challenge1' component={Challenge1}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
