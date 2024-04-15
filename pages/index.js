import { Footer, Navbar } from '../components';
// import { About, Explore, Feedback, Hero, Insights, World } from '../sections';
import { About, Explore, Hero } from '../sections';
import Speakers from '../components/Speakers';
import Forum from '../components/Forum';

const Home = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <Explore />
      <Speakers />
      <Forum />
    </div>
    <Footer />
  </div>
);

export default Home;
