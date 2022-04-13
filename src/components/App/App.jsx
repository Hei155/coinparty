import React, { useRef } from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import ReplenishmentPage from '../ReplenishmentPage/ReplenishmentPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import TokenPage from '../TokenPage/TokenPage';

import logo from '../../logo.svg';
import './App.css';
import Auth from '../Auth/Auth';

function App() {
  const ref = useRef();
  const [path] = React.useState(useLocation().pathname);
  React.useEffect(() => {
    if (path === "/") {
      ref.current.style = "background: black";
    } else if (path === "/settings") {
      ref.current.style = "backgreound: white";
    }
  }, [path]);

  return (
    <div className="page" ref={ref}>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/replenishment" element={<ReplenishmentPage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/token" element={<TokenPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
