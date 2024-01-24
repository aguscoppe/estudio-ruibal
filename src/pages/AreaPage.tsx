import { useMemo } from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
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
      <ScrollRestoration />
      <div id='area-page' className='container'>
        <h2>{data.title}</h2>
        {data?.text?.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    </Wrapper>
  );
};

export default Area;
