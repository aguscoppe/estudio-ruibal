import '../App.css';
import {
  NavBar,
  Header,
  About,
  Areas,
  Faq,
  Footer,
  Contact,
} from '../sections';

function Landing() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Areas />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
