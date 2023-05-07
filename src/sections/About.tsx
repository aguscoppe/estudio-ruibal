import { Link } from 'react-router-dom';

const About = ({ isFullVersion = false }) => {
  return (
    <section id='about'>
      <div className='container'>
        <h2>Sobre mí</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {!isFullVersion ? (
          <Link to='/about'>
            <button>VER MÁS</button>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default About;
