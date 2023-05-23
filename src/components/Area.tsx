import { Link } from 'react-router-dom';

const Area = ({ item }: any) => {
  const { id, title, text } = item;
  return (
    <Link to={`/area/${id}`}>
      <div className='area'>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default Area;
