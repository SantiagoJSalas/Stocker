import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import Auth from './screens/Auth';
import GamifiedModule from './screens/LandingPage/GamifiedModule';
import WebApp from './screens/WebApp/WebApp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/module" element={<GamifiedModule />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/wbA/*" element={<WebApp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
