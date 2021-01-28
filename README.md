# react router demo

## installation

```sh
yarn add react-router-dom
# npm install react-router-dom
```

## What do I import?

```js
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
```

## How do I create "pages" with react router?

Create some components, for example:

- Home
- About
- Stuff

## How do I use the Router?

Wrap your *entire* App with it.

```js
    <Router>
      <div className="App">

        <Home />
        <Stuff />
        <About />

      </div>
    </Router>
```

## How do I create a nav with react router?

```js

      <header>
        <Link to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/about">About</Link>
      </header>

```

## How do I show one page at a time?

```js

```




