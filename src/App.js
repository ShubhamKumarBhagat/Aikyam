
import React from 'react';
import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Section1 from './components/Layout/Section1/Section1';
import Section2 from './components/Layout/Section2/Section2';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import PrevEdition from './pages/PrevEdition';
import MagazineLinks from './MagazineLinks';
function App() {
  
  return (
    <BrowserRouter>
    
      <div className="app">
      <Switch>
      <Route path="/" exact>
        <Landing link_to_latest={MagazineLinks[0]}></Landing>
      </Route>
      <Route path={"/previous-editions"} exact>
        <PrevEdition linksArray={MagazineLinks}></PrevEdition>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
