import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Showcase from './components/Showcase/Showcase';
import Sponsors from './components/Sponsors/Sponsors';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Sponsors />
      <Showcase />
    </React.Fragment>
  );
}

export default App;
