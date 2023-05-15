import { QuestionItem } from '../constants';

const Question = ({
  item,
  onClick,
}: {
  item: QuestionItem;
  onClick: (id: number) => void;
}) => {
  const { id, question, answer, open } = item;
  return (
    <div className='question' onClick={() => onClick(id)}>
      <div className='question-text'>
        <h4>{question}</h4>
        <i className={`fa-solid fa-angle-${open ? 'up' : 'down'}`}></i>
      </div>
      <p className='answer' style={{ display: open ? 'block' : 'none' }}>
        {answer}
      </p>
    </div>
  );
};

export default Question;
