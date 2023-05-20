import { HashLink } from 'react-router-hash-link';
import video from '../assets/header.mp4';
import { useMemo } from 'react';

const Header = () => {
  const backgroundVideo = useMemo(
    () => (
      <video width='100%' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    ),
    []
  );
  return (
    <header id='header'>
      <div className='container'>
        {backgroundVideo}
        <h1>Bettina S. Ruibal</h1>
        <h3>Abogada de Familia</h3>
        <HashLink to='/#contact'>
          <button>CONTACTO</button>
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
