import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../constants';

const NavBar = () => {
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const isHome = pathname === '/';

  const changeNavBg = () => {
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: !isHome || navBg ? '' : 'transparent' }}>
      <div className='container'>
        <div className='logo'>
          <HashLink to='/#header'>
            <p>BR</p>
          </HashLink>
        </div>
        <ul className='links'>
          {navLinks.map(({ id, url, title }) => (
            <HashLink key={id} to={url}>
              <li>{title}</li>
            </HashLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
