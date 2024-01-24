import { Link } from 'react-router-dom';
import { shortAboutMe } from '../constants';

const About = ({
  text,
  title = 'Trayectoria',
  isFullVersion = false,
}: {
  text?: string[];
  title?: string;
  isFullVersion?: boolean;
}) => {
  return (
    <section id='about'>
      <div
        className='container'
        style={{
          // maxWidth: isFullVersion ? '80vw' : '60vw',
          alignItems: isFullVersion ? 'flex-start' : 'center',
        }}
      >
        <h2>{title}</h2>
        {isFullVersion ? (
          text?.map((el: string, index: number) => <p key={index}>{el}</p>)
        ) : (
          <p>{shortAboutMe}</p>
        )}
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
