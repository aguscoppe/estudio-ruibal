import { ScrollRestoration } from 'react-router-dom';
import Wrapper from '../Wrapper';
import { About } from '../sections';

const AboutPage = () => {
  return (
    <Wrapper isFullVersion>
      <ScrollRestoration />
      <About isFullVersion />
    </Wrapper>
  );
};

export default AboutPage;
