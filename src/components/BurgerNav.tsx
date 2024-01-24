import { navLinks } from '../constants';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const BurgerNav = ({ hideBurgerNav }: any) => {
  const { pathname, hash } = useLocation();
  return (
    <div className='burger-nav-container' onClick={hideBurgerNav}>
      <ul className='links'>
        {navLinks.map(({ id, url, title }) => (
          <HashLink
            key={id}
            to={url}
            className={`${pathname}${hash}` === url ? 'active' : ''}
          >
            <li>{title}</li>
          </HashLink>
        ))}
      </ul>
    </div>
  );
};

export default BurgerNav;
