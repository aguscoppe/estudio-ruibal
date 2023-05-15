import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../Wrapper';
import { itemsAreas as items } from '../constants';
import RedirectPage from './RedirectPage';

const Area = () => {
  const { id } = useParams();
  const data = useMemo(() => {
    const filtered = items.filter((el) => el.id.toString() === id);
    if (filtered.length > 0) {
      return filtered[0];
    }
    return null;
  }, [id]);

  if (!data) return <RedirectPage />;

  return (
    <Wrapper>
      <div>
        {data?.text?.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </Wrapper>
  );
};

export default Area;
