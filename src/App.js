import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Places from './pages/Places';
import Modal from './components/Modal/Modal';

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
      {showModal && <Modal onClick={toggleModal} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<Places />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
