# react router demo

## installation

```sh
yarn add react-router-dom
# npm install react-router-dom
```

## What do I import?

```js
import { 
  Router,
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



