import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
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
