import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Places from './pages/Places';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(prevVal => !prevVal);
  };

  const toggleModal = () => {
    setNavIsOpen(false);
    setShowModal(prevVal => !prevVal);
  };

  return (
    <React.Fragment>
      <Nav
        navIsOpen={navIsOpen}
        toggleNav={toggleNav}
        showModal={showModal}
        onClick={toggleModal}
      />
      <Routes>
        <Route
          path="/"
          element={<Home showModal={showModal} onClick={toggleModal} />}
        />
        <Route path="/place-to-stay" element={<Places />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
