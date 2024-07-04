import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import GamifiedModule from './screens/GamifiedModule';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/module" element={<GamifiedModule />} />
          {/* <Route path="/auth" element={<GamifiedModule />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
