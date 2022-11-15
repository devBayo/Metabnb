import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Places from './pages/Places';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<Places />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
