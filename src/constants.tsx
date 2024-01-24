export interface QuestionItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

export interface Item {
  id: number;
  title: string;
  text: string[];
}

export const navLinks = [
  { id: 1, title: 'Home', url: '/#header' },
  { id: 2, title: 'Trayectoria', url: '/#about' },
  { id: 3, title: 'Áreas', url: '/#areas' },
  { id: 4, title: 'Preguntas', url: '/#faq' },
  { id: 5, title: 'Contacto', url: '/#contact' },
];

export const fullAboutMe = [
  'Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad de Derecho y Ciencias Sociales en el año 1997. Matriculada en el Colegio Público de Abogados de Capital Federal en el año 1999 (Tomo 67 Folio 205) y en el Colegio de Abogados de San Isidro en el año 2003 (Tomo XXXV - Folio 20).',
  'Dedicada desde el año 2000 a la resolución de conflictos personales y patrimoniales relacionados con el derecho de familia y asuntos sucesorios. Práctica adquirida en estudios jurídicos de primer nivel, cursos de posgrado y actualización legislativa. Experiencia y desempeño de alto rendimiento en la especialidad.',
  'Interrelación con juristas dedicados al derecho de familia y otras áreas para derivaciones y/o trabajos en conjunto. Corresponsales en distintos puntos del país. Vinculación con estudios de mediación, escribanías, estudios contables, peritos en distintas especialidades y gestorías.',
  'Asesoramiento integral del cliente mediante el abordaje de distintas soluciones extrajudiciales o judiciales según las características del asunto.',
  'Ética, seriedad, calidez humana, compromiso y eficacia.',
];

export const shortAboutMe =
  'Abogada recibida en la Universidad de Buenos Aires (UBA) - Facultad de Derecho y Ciencias Sociales en el año 1997. Dedicada desde el año 2000 a la resolución de conflictos personales y patrimoniales relacionados con el derecho de familia y asuntos sucesorios. Práctica adquirida en estudios jurídicos de primer nivel, cursos de posgrado y actualización legislativa. Experiencia y desempeño de alto rendimiento en la especialidad.';

export const itemsAreas: Item[] = [
  {
    id: 1,
    title: 'Divorcio',
    text: [
      '• Petición unilateral - Propuesta reguladora',
      '• Petición conjunta - Convenio regulador',
      '• Atribución de la vivienda familiar',
      '• Compensación económica',
      '• Régimen patrimonial del matrimonio: De comunidad - bienes propios y gananciales- y régimen de separación de bienes',
      '• Liquidación de régimen de comunidad de bienes - Partición',
      '• Fijación de renta compensatoria por uso de vivienda',
    ],
  },
  {
    id: 2,
    title: 'Medidas provisionales',
    text: [
      'Relativas a las personas y a los bienes:',
      '• Embargo de bienes muebles o inmuebles',
      '• Inhibición general de bienes',
      '• Medidas de no innovar',
      '• Exclusión del hogar',
      '• Entrega de objetos de uso personal',
      '• Alimentos provisorios',
    ],
  },
  {
    id: 3,
    title: 'Uniones convivenciales',
    text: [
      '• Pactos de convivencia: Confección, modificación, rescisión y extinción',
      '• Efectos de los pactos frente a terceros',
      '• Cese de la convivencia: Confección convenio regulador',
      '• Compensación económica',
      '• Atribución de la vivienda familiar',
      '• Fijación de renta compensatoria por uso de vivienda',
    ],
  },
  {
    id: 4,
    title: 'Régimen de Alimentos',
    text: [
      '• Fijación de la prestación alimentaria',
      '• Reclamo a los ascendientes (abuelos)',
      '• Modificación de la prestación alimentaria (aumento, disminución, cesación)',
      '• Alimentos para hijos mayores de edad',
      '• Alimentos para la ex cónyuge o ex conviviente: situaciones excepcionales',
      '• Liquidación y ejecución de alimentos impagos o adeudados',
    ],
  },
  {
    id: 5,
    title: 'Responsabilidad parental',
    text: [
      'Cuidado personal y régimen de comunicación de los hijos:',
      '• Cuidado personal compartido (anteriormente denominado tenencia): Indistinto o alternado',
      '• Regímenes de comunicación con el progenitor no conviviente (anteriormente denominado régimen de visitas)',
      '• Cuidado personal unilateral',
      '• Residencia o domicilio principal del hijo',
      '• Extinción, privación, suspensión y rehabilitación de la responsabilidad parental',
      '• Regímenes de comunicación con abuelos y familiares',
    ],
  },
  {
    id: 6,
    title: 'Violencia familiar',
    text: [
      'Protección de personas',
      'Acción destinada a proteger a las víctimas de todos aquellos actos que van desde el empleo de la fuerza física, hasta el hostigamiento, el acoso, la intimidación, o abusos que se producen dentro o fuera del seno de un hogar, y que perpetra al menos un miembro de la familia contra algún otro familiar.',
      '• Asesoramiento previo a la denuncia',
      '• Seguimiento del trámite hasta su finalización',
      '• Prórroga de las medidas dictadas',
    ],
  },
  {
    id: 7,
    title: 'Filiación',
    text: [
      '• Determinación de la maternidad',
      '• Determinación de la filiación matrimonial y extramatrimonial',
      '• Acciones de reclamación de filiación',
      '• Acciones de impugnación de filiación',
      '• Filiación por técnicas de reproducción humana asistida',
      '• Filiación por adopción',
    ],
  },
  {
    id: 8,
    title: 'Adopción',
    text: [
      '• Guarda con fines de adopción',
      '• Adopción Plena',
      '• Adopción Simple',
      '• Adopción de integración (adopción del hijo del cónyuge o del conviviente)',
    ],
  },
  {
    id: 9,
    title: 'Guarda',
    text: [
      'En supuestos de gravedad se puede peticionar al juez que otorgue la guarda del menor a un pariente por el plazo de un año, prorrogable por otro periodo igual. Luego debe resolverse la situación del niño, niña o adolescente.',
    ],
  },
  {
    id: 10,
    title: 'Tutela',
    text: [
      'Protección a la persona y bienes de un niño, niña o adolescente cuando no haya persona que ejerza la responsabilidad parental del mismo',
    ],
  },
  {
    id: 11,
    title: 'Autorizaciones de viaje',
    text: [
      'Venia Judicial - Distintas hipótesis',
      '• Cuando uno de los progenitores se opone al viaje de un menor al exterior',
      '• Cuando el viaje no contempla el superior interés del menor',
      '• Cuando el viaje carece de condiciones de seguridad para el menor',
      '• Cuando se ha revocado la autorización existente',
      '• Pedido de radicación de un menor en el exterior que contempla el superior interés del niño',
    ],
  },
  {
    id: 12,
    title: 'Exequatur',
    text: [
      'Reconocimiento de sentencias extranjeras',
      'Trámite para validar una sentencia dictada en otro país con su correspondiente inscripción ante el Registro del Estado Civil y Capacidad de las personas',
    ],
  },
  {
    id: 13,
    title: 'Informaciones sumarias',
    text: [
      '• Inscripción de matrimonio celebrado en el extranjero',
      '• Inscripción tardía de nacimiento',
      '• Inscripción de adopción celebrada en el extranjero',
      '• Rectificación de partidas',
    ],
  },
  {
    id: 14,
    title: 'Salud Mental - Internaciones',
    text: [
      '• Determinación de la capacidad de las personas',
      '• Restricciones a la capacidad',
      '• Sistemas de apoyo al ejercicio de la capacidad',
      '• Cese a la incapacidad',
      '• Inhabilitaciones',
    ],
  },
  {
    id: 15,
    title: 'Sucesiones',
    text: [
      '• Ab intestato: Cuando el causante no ha dejado testamento',
      '• Testamentarias: Cuando el causante ha dejado testamento  a sobre cerrado, por acto público ante escribano u ológrafo o escrito de puño y letra fechado y firmado por el testador',
      '• Representación de los herederos en forma conjunta o separada',
      '• Protección de la legítima',
      '• Acción de colación',
      '• Acuerdos particionales de la herencia',
      '• Beneficio de inventario',
      '• Asesoramiento sobre donaciones en vida o testamentos',
    ],
  },
];

export const itemsFAQ: QuestionItem[] = [
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
