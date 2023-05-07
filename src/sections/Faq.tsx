import Question from '../components/Question';

export interface QuestionItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

const items: QuestionItem[] = [
  {
    id: 1,
    question:
      '¿Me puedo divorciar de mi cónyuge aunque el mismo no esté de acuerdo?',
    answer:
      'Sí, a partir de la sanción del nuevo Código Civil y Comercial se puede lograr que se decrete el divorcio de los cónyuges, aunque uno de ellos no preste su conformidad o esté en desacuerdo.',
    open: false,
  },
  {
    id: 2,
    question: 'What?',
    answer: 'Lorem',
    open: false,
  },
];

const Faq = () => {
  return (
    <section id='faq'>
      <div className='container'>
        <h2>Preguntas frecuentes</h2>
        {items.map((el) => (
          <Question key={el.id} item={el} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
