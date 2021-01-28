import { useState, useEffect } from 'react';
import Home from './components/Home';
import Stuff from './components/Stuff';
import About from './components/About';

import axios from 'axios';

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [data, setData] = useState({});
  // The arrow function is what I want to do
  // The square brackets control when you do it (empty means "on page load")
  useEffect(() => {
    axios.get('/api')
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      });
  }, []);

  async function getValue() {
    const resp = await axios.get('/api/counter');
    setData(resp.data);
  }

  async function incValue() {
    const resp = await axios.post('/api/counter');
    setData(resp.data);
  }

  async function decValue() {
    const resp = await axios.put('/api/counter');
    setData(resp.data);
  }

  async function resetValue() {

    const resp = await axios.delete('/api/counter');
    setData(resp.data);
  }


  return (
    <Router>
      <div className="App">
      <h1>Here is a message: {data.status}</h1>
      <header>
        <Link to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/about">About</Link>
      </header>

      <Switch>

        <Route path="/" exact>
          <Home />
          <p>data is: {data.value}</p>
          <button onClick={getValue}>get</button>
          <button onClick={incValue}>+</button>
          <button onClick={decValue}>-</button>
          <button onClick={resetValue}>reset</button>
        </Route>
        <Route path="/stuff">
          <Stuff 
            data={data}
          />
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
