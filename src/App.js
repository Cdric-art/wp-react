import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Home} from "./components/Home";
import {UrbanArt} from "./components/UrbanArt";
import {InSide} from "./components/InSide";
import {Print} from "./components/Print";
import {Events} from "./components/Events";
import {Cgv} from "./components/Cgv";
import {Mentions} from "./components/Mentions";

import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <div className="header-inner">
                        <h1>Artiste</h1>
                        <h2>Street-Art</h2>
                    </div>
                </header>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/urban-art">Urban Art</Link>
                        </li>
                        <li>
                            <Link to="/inside">In Side</Link>
                        </li>
                        <li>
                            <Link to="/print">Print</Link>
                        </li>
                        <li>
                            <Link to="/events">Événements</Link>
                        </li>
                        <li>
                            <a href="https://www.wp.cdricart-dev.fr/boutique">Boutique</a>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/urban-art">
                            <UrbanArt/>
                        </Route>
                        <Route path="/inside">
                            <InSide/>
                        </Route>
                        <Route path="/print">
                            <Print/>
                        </Route>
                        <Route path="/events">
                            <Events/>
                        </Route>
                        <Route path="/mentions">
                            <Mentions/>
                        </Route>
                        <Route path="/cgv">
                            <Cgv/>
                        </Route>
                    </Switch>
                </main>
                <footer>
                    <div className="ml-cgu">
                        <Link to="/mentions">Mentions Légales</Link>
                        <Link to="/cgv">Conditions générales de vente</Link>
                    </div>
                    <div className="copy">
                        <p>&copy; Copyright Cdric_art</p>
                    </div>
                    <div className="social-icons">
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </footer>
            </Router>
        </div>
    );
}

export default App;
