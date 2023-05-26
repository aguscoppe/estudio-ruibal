import { Link } from 'react-router-dom';

const Area = ({ item }: { item: { id: number; title: string } }) => {
  const { id, title } = item;
  return (
    <Link to={`/area/${id}`}>
      <div className='area'>
        <div>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Area;
