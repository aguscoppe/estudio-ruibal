import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h1>Bettina S. Ruibal</h1>
        <h3>Abogada de Familia</h3>
        <Link to='/contact'>
          <button>CONTACTO</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
