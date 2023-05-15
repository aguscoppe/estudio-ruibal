import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div>LOGO</div>
        <ul className='links'>
          <HashLink to='/#header'>
            <li>HOME</li>
          </HashLink>
          <HashLink to='/#about'>
            <li>SOBRE MÍ</li>
          </HashLink>
          <HashLink to='/#areas'>
            <li>ÁREAS</li>
          </HashLink>
          <HashLink to='/#faq'>
            <li>PREGUNTAS</li>
          </HashLink>
          <HashLink to='/#contact'>
            <li>CONTACTO</li>
          </HashLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
