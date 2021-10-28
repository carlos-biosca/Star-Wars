import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'

function App () {
  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
