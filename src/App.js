import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LearnMore from './components/LearnMore/LearnMore';
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
      <LearnMore />
      <Footer />
    </React.Fragment>
  );
}

export default App;
