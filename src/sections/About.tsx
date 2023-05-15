import { Link } from 'react-router-dom';

const About = ({ isFullVersion = false }) => {
  return (
    <section id='about'>
      <div
        className='container'
        style={{
          maxWidth: isFullVersion ? '80vw' : '60vw',
        }}
      >
        <h2>Sobre mí</h2>
        {isFullVersion ? (
          <>
            <p>
              Abogada recibida en la Universidad de Buenos Aires (UBA) -
              Facultad de Derecho y Ciencias Sociales en el año 1997.
              Matriculada en el Colegio Público de Abogados de Capital Federal
              en el año 1999 (Tomo 67 Folio 205) y en el Colegio de Abogados de
              San Isidro en el año 2003 (Tomo XXXV - Folio 20).
            </p>
            <p>
              Dedicada desde el año 2000 a la resolución de conflictos
              personales y patrimoniales relacionados con el derecho de familia
              y asuntos sucesorios. Práctica adquirida en estudios jurídicos de
              primer nivel, cursos de posgrado y actualización legislativa.
              Experiencia y desempeño de alto rendimiento en la especialidad.
            </p>
            <p>
              Interrelación con juristas dedicados al derecho de familia y otras
              áreas para derivaciones y/o trabajos en conjunto. Corresponsales
              en distintos puntos del país. Vinculación con estudios de
              mediación, escribanías, estudios contables, peritos en distintas
              especialidades y gestorías.
            </p>
            <p>
              Asesoramiento integral del cliente mediante el abordaje de
              distintas soluciones extrajudiciales o judiciales según las
              características del asunto.
            </p>
            <p>Ética, seriedad, calidez humana, compromiso y eficacia.</p>
          </>
        ) : (
          <p>
            Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad
            de Derecho y Ciencias Sociales en el año 1997. Dedicada desde el año
            2000 a la resolución de conflictos personales y patrimoniales
            relacionados con el derecho de familia y asuntos sucesorios.
            Práctica adquirida en estudios jurídicos de primer nivel, cursos de
            posgrado y actualización legislativa. Experiencia y desempeño de
            alto rendimiento en la especialidad.
          </p>
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
