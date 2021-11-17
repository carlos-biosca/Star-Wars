import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import DetailsStarship from "./views/DetailsStarship/DetailsStarship";
import Actors from "./views/Actors/Actors";
import DetailsActor from "./views/DetailsActor/DetailsActor";

import ScrollToTop from "./utils/ScrollToTop";
import useLocalstorage from "./hooks/useLocalstorage";


function App () {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [logged, setLogged] = useLocalstorage('login', {
    display: '',
    login: false
  })

  return (
    <div className="App">
      {loginModal && <Modal closeModal={setLoginModal} openModal={setRegisterModal} title={'sign in'} setLogged={setLogged} logged={logged} />}
      {registerModal && <Modal closeModal={setRegisterModal} openModal={setLoginModal} title={'create your account'} />}
      <Header openLoginModal={setLoginModal} openRegisterModal={setRegisterModal} logged={logged} setLogged={setLogged} />
      <Router>
        <Nav logged={logged} />
        <main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/starships">
              {
                logged.login ? (
                  <Starships />
                ) : (
                  <Redirect to="/" />
                )
              }
            </Route>
            <Route path="/starships/:id">
              {
                logged.login ? (
                  <DetailsStarship />
                ) : (
                  <Redirect to="/" />
                )
              }
            </Route>
            <Route exact path="/actors">
              {
                logged.login ? (
                  <Actors />
                ) : (
                  <Redirect to="/" />
                )
              }
            </Route>
            <Route path="/actors/:id">
              {
                logged.login ? (
                  <DetailsActor />
                ) : (
                  <Redirect to="/" />
                )
              }
            </Route>
          </Switch>
        </main>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
