import { useState } from 'react';
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
    question:
      '¿Es obligatorio incluir en el divorcio una propuesta que regule los efectos del mismo (alimentos, régimen de comunicación, atribución de vivienda, etcétera?',
    answer:
      'Sí, es obligatorio incluir la propuesta respecto de todos esos temas en la petición de divorcio.',
    open: false,
  },
  {
    id: 3,
    question:
      '¿Qué ocurre si con mi cónyuge estamos de acuerdo en divorciarnos, pero disentimos en materia de alimentos, régimen de comunicación, distribución de los bienes, etcétera?',
    answer:
      'En ese caso pueden divorciarse, pero deberán concurrir a mediación y/o juicio para tratar aquellos temas en los que no hayan logrado un acuerdo.',
    open: false,
  },
  {
    id: 4,
    question:
      '¿Qué rubros debo tener en cuenta para calcular los alimentos de mi/s hijo/s?',
    answer:
      'Los rubros que deben ponderarse son: manutención, educación, esparcimiento, vestimenta, habitación, asistencia, gastos por enfermedad y gastos necesarios para adquirir una profesión u oficio.',
    open: false,
  },

  {
    id: 5,
    question: '¿Se puede modificar la cuota alimentaria?',
    answer:
      'Sí, los alimentos son esencialmente revisables, ya sea para aumentarlos, disminuirlos o pedir la cesación de los mismos.',
    open: false,
  },
  {
    id: 6,
    question:
      '¿Es cierto que la cuota alimentaria es el 30% de los ingresos del obligado a abonarla?',
    answer:
      'No, ese porcentaje consiste en una creencia errónea. En algunos casos el juez puede establecer un porcentaje de los ingresos del alimentante, que no necesariamente tiene que ser en dicha proporción, puede ser mayor o menor según el caso. En otras ocasiones o bien se establece un monto fijo o cuotas mixtas que incluyen el pago directo de rubros en especie ej. cuota escolar, prepaga, entre otros.',
    open: false,
  },
  {
    id: 7,
    question:
      '¿Se puede modificar el cuidado personal o el régimen de comunicación de los hijos?',
    answer:
      'Sí, al igual que los alimentos las decisiones sobre cuidado personal o régimen de comunicación de los hijos se pueden revisar. Para ello siempre se debe ponderar el superior interés de los niños.',
    open: false,
  },
  {
    id: 8,
    question:
      '¿Qué ocurre si con mi cónyuge no estamos de acuerdo con la distribución de bienes gananciales?',
    answer:
      'En ese caso hay que peticionar una mediación prejudicial obligatoria a los fines de intentar arribar a un acuerdo y si no se logra hay que tramitar el correspondiente proceso para que lo determine el juez.',
    open: false,
  },
  {
    id: 9,
    question: '¿Qué es la compensación económica?',
    answer:
      'La compensación económica consiste en una prestación única o renta por tiempo determinado para el cónyuge o conviviente que sufra un desequilibrio económico manifiesto con motivo de la ruptura de la convivencia o del matrimonio.',
    open: false,
  },
  {
    id: 10,
    question:
      '¿Es cierto que para iniciar una sucesión debemos estar de acuerdo todos los herederos?',
    answer:
      'No. La sucesión la puede abrir cualquiera de los herederos sin perjuicio de que los otros no estén de acuerdo, o prefieran tener otro patrocinio letrado.',
    open: false,
  },
];

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
