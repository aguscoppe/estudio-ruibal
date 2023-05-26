import { HashLink } from 'react-router-hash-link';
import { Item, itemsAreas, navLinks } from '../constants';
import { Link } from 'react-router-dom';

const chunkIntoN = (arr: Item[], n: number) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const Footer = () => {
  const areas = chunkIntoN(itemsAreas, 3);
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
          <div className='areas-items'>
            {areas.map((area) => (
              <ul>
                {area.map(({ id, title }) => (
                  <Link to={`/area/${id}`}>{<li key={id}>{title}</li>}</Link>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='contact'>
          <ul>
            <h5>Contact</h5>
            <a href='mailto: bettinaruibal@gmail.com'>
              <li>bettinaruibal@gmail.com</li>
            </a>
            <a href='mailto: bettina@jasoc.com.ar'>
              <li>bettina@jasoc.com.ar</li>
            </a>
            <li>Tribunales, CABA</li>
            <li>Caballito, CABA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
