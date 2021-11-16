import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./views/Details/Details";

import ScrollToTop from "./utils/ScrollToTop";


function App () {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [logged, setLogged] = useState({
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
                  <Details />
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
