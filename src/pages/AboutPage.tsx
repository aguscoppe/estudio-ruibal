import { ScrollRestoration } from 'react-router-dom';
import Wrapper from '../Wrapper';
import { About } from '../sections';
import { fullAboutMe } from '../constants';

const AboutPage = () => {
  return (
    <Wrapper isFullVersion>
      <ScrollRestoration />
      <About text={fullAboutMe} isFullVersion />
    </Wrapper>
  );
};

export default AboutPage;
