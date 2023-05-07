import { About, Footer, NavBar } from '../sections';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <About isFullVersion />
      <Footer />
    </div>
  );
};

export default AboutPage;
