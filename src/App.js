import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./views/Details/Details";

import Footer from "./components/Footer/Footer";

function App () {
  const [selectedStarship, setSelectedStarship] = useState()
  const [idStarship, setIdStarship] = useState()

  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <main>
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
        </main>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
