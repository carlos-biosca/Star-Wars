import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'

import getData from './logic/getData';

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    getData('https://swapi.dev/api/starships/', setData)
  }, [])

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
            <Starships starships={data.results} />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
