import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Sponsors from './components/Sponsors/Sponsors';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Sponsors />
    </React.Fragment>
  );
}

export default App;
