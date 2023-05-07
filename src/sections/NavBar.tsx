import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div>LOGO</div>
        <ul className='links'>
          <NavLink to='/'>
            <li>HOME</li>
          </NavLink>
          <NavLink to='/about'>
            <li>SOBRE MÍ</li>
          </NavLink>
          <NavLink to='/areas'>
            <li>ÁREAS</li>
          </NavLink>
          <NavLink to='/faq'>
            <li>PREGUNTAS</li>
          </NavLink>
          <NavLink to='/contact'>
            <li>CONTACTO</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
