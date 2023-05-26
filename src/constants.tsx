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
  { id: 2, title: 'Sobre mí', url: '/#about' },
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 2,
    title: 'Medidas provisionales',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 3,
    title: 'Uniones convivenciales',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 4,
    title: 'Régimen de Alimentos',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 5,
    title: 'Responsabilidad parental',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 6,
    title: 'Violencia familiar',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 7,
    title: 'Filiación',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 8,
    title: 'Adopción',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 9,
    title: 'Guarda',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 10,
    title: 'Tutela',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 11,
    title: 'Autorizaciones de viaje',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 12,
    title: 'Exequatur',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 13,
    title: 'Informaciones sumarias',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 14,
    title: 'Salud Mental - Internaciones',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
    ],
  },
  {
    id: 15,
    title: 'Sucesiones',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Duis ut diam quam nulla porttitor massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla malesuada pellentesque elit eget. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor posuere ac ut consequat semper viverra nam libero. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eget aliquet nibh praesent tristique magna. Aliquam faucibus purus in massa tempor nec feugiat nisl. In hac habitasse platea dictumst quisque. Quis lectus nulla at volutpat diam. Tortor at risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien. Ut tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu.',
      'Ut eu sem integer vitae justo eget magna fermentum. Cursus turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Urna duis convallis convallis tellus id interdum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Feugiat pretium nibh ipsum consequat nisl vel. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Non sodales neque sodales ut etiam sit amet. Nulla at volutpat diam ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nam aliquam sem et tortor consequat id. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et odio pellentesque diam volutpat.',
      'Tincidunt vitae semper quis lectus nulla. At tellus at urna condimentum mattis. Purus sit amet volutpat consequat. Dolor sit amet consectetur adipiscing elit pellentesque. Dui nunc mattis enim ut tellus elementum. Nisl tincidunt eget nullam non nisi est. Fermentum dui faucibus in ornare. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet. Vestibulum sed arcu non odio euismod lacinia at quis risus. Blandit libero volutpat sed cras ornare arcu.',
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
