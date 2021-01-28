import Home from './components/Home';
import Stuff from './components/Stuff';
import About from './components/About';

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

      <header>
        <Link to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/about">About</Link>
      </header>

      <Switch>

        <Route path="/" exact>
          <Home />   
        </Route>
        <Route path="/stuff">
          <Stuff />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
