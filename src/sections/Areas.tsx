import Area from '../components/Area';

const items = [
  {
    id: 1,
    title: 'Divorcio',
  },
  {
    id: 2,
    title: 'Medidas provisionales',
  },
  {
    id: 3,
    title: 'Uniones convivenciales',
  },
  {
    id: 4,
    title: 'Régimen de Alimentos',
  },
  {
    id: 5,
    title: 'Responsabilidad parental',
  },
  {
    id: 6,
    title: 'Violencia familiar',
  },
];

const Areas = () => {
  return (
    <section id='areas'>
      <div className='container'>
        <h2>Áreas de especialidad</h2>
        <div className='area-items'>
          {items.map((el) => (
            <Area key={el.id} title={el.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
