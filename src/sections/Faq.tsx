import { useState } from 'react';
import Question from '../components/Question';
import { itemsFAQ as items } from '../constants';

const Faq = () => {
  const [questions, setQuestions] = useState(items);

  const handleClick = (id: number) => {
    setQuestions((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              open: !el.open,
            }
          : { ...el }
      )
    );
  };

  return (
    <section id='faq'>
      <div className='container'>
        <h2>Preguntas frecuentes</h2>
        {questions.map((el) => (
          <Question key={el.id} item={el} onClick={handleClick} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
