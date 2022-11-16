import Header from '../components/Header/Header';
import Sponsors from '../components/Sponsors/Sponsors';
import Showcase from '../components/Showcase/Showcase';
import LearnMore from '../components/LearnMore/LearnMore';
import Modal from '../components/Modal/Modal';

const Home = props => {
  return (
    <main>
      <Header />
      <Sponsors />
      <Showcase />
      <LearnMore />
      {props.showModal && <Modal onClick={props.onClick} />}
    </main>
  );
};

export default Home;
