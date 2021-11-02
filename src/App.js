import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./components/Details/Details";

function App () {
  const [selectedStarship, setSelectedStarship] = useState()
  const [idStarship, setIdStarship] = useState()

  // useEffect(async () => {
  //   const starship = await sessionStorage.getItem('starship')
  //   const id = await sessionStorage.getItem('id')
  //   setSelectedStarship(starship)
  //   setIdStarship(id)
  // }, [])

  useEffect(() => {
    sessionStorage.setItem('starship', JSON.stringify(selectedStarship));
    sessionStorage.setItem('id', JSON.stringify(idStarship));
  }, [selectedStarship, idStarship]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/starships">
            <Starships changeStarship={setSelectedStarship} changeId={setIdStarship} />
          </Route>
          <Route path="/starships/:id">
            <Details info={selectedStarship} id={idStarship} />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
