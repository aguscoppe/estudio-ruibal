import { QuestionItem } from '../sections/Faq';

const Question = ({ item }: { item: QuestionItem }) => {
  const { question, answer } = item;
  return (
    <div className='question'>
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
