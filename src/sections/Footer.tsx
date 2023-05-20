import { HashLink } from 'react-router-hash-link';
import { itemsAreas, navLinks } from '../constants';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='links'>
          <h5>Links</h5>
          <ul>
            {navLinks.map(({ id, url, title }) => (
              <HashLink key={id} to={url}>
                <li>{title}</li>
              </HashLink>
            ))}
          </ul>
        </div>
        <div className='areas'>
          <h5>Areas</h5>
          <ul>
            {itemsAreas.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>
        <div className='contact'>
          <ul>
            <h5>Contact</h5>
            <li>bettinaruibal@gmail.com</li>
            <li>bettina@jasoc.com.ar</li>
            <li>Tribunales, CABA</li>
            <li>Caballito, CABA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
