import { ScrollRestoration } from 'react-router-dom';
import '../App.css';
import Wrapper from '../Wrapper';
import { Header, About, Areas, Faq, Contact } from '../sections';

function Landing() {
  return (
    <Wrapper>
      <ScrollRestoration />
      <Header />
      <About />
      <Areas />
      <Faq />
      <Contact />
    </Wrapper>
  );
}

export default Landing;
