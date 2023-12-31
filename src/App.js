import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home.js";
import Admin from "./Pages/Admin.js";
import Login from "./components/Login.js";
import {Helmet} from "react-helmet";
import useToken from "./components/Admin/useToken.js";


export default function App () {
  const {token, setToken} = useToken();
    return (
      <div>
         <Helmet>
            <title>South Paragliding | Parapanta Rânca</title>
            <meta name="description" content="Zboruri de agrement cu parapanta in tandem."></meta>
            <meta name="keywords" content="parapanta, rânca, craiova, salt, tandem, oltenia, novaci, dolj, paragliding, instructor, scoala, severin, crovna, sud, mosor, remorcaj, olt, mehedinti"/>
        </Helmet>
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap" as="style"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"/>
        <Router>
        <div className = "body" >
            <nav className="routes">
              <ul>
                <li key = 'SP-homepage' >
                    <Link to='/'>Southparagliding</Link>
                  </li>
                  <li key = 'admin' >
                    <Link to='/intandem'>Admin-Southparagliding</Link>
                  </li>
              </ul>
            </nav>
            <Switch>
              {token ?
                <Route path ="/intandem" render={(props) => (<Admin {...props} setToken={setToken}/>)}/> 
              : 
                <Route path="/intandem" render={(props) => (<Login {...props} setToken={setToken}/>)}/>}
                <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </Router> 
      </div> 
    );
}


