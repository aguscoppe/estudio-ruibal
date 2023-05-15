import Area from '../components/Area';
import { itemsAreas as items } from '../constants';

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
