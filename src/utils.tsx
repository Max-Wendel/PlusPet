function createServiceSample(
  id: number,
  pet_name: string,
  pet_tutor: string,
  service: string,
  status: string,
  date: string,
) {
  return { id, pet_name, pet_tutor, service, status, date };
}

function createPetSample(
  id: number,
  pet_name: string,
  pet_tutor: string,
  specie: string,
  breed: string,
  gender: string,
) {
  return { id, pet_name, pet_tutor, specie, breed, gender };
}

function createTutorSample(
  id: number,
  tutor_name: string,
  tutor_cpf: string,
  tutor_email: string,
) {
  return { id, tutor_name, tutor_cpf, tutor_email };
}

function createPetOptionSample(
  id: string,
  pet_name: string
) {
  return { id, pet_name }
}

function createTutorOptionSample(
  id: string,
  pet_tutor: string
) {
  return { id, pet_tutor }
}

export const serviceRowsSample = [
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Banho', 'Aguardando Atendimento', '25/08/2023'),
  createServiceSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Consulta Veterinária', 'Finalizado', '22/08/2023'),
  createServiceSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Retorno', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Cancelado', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Banho', 'Aguardando Atendimento', '25/08/2023'),
  createServiceSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Consulta Veterinária', 'Finalizado', '22/08/2023'),
  createServiceSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Retorno', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Cancelado', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Banho', 'Aguardando Atendimento', '25/08/2023'),
  createServiceSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Consulta Veterinária', 'Finalizado', '22/08/2023'),
  createServiceSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Retorno', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Cancelado', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Banho', 'Aguardando Atendimento', '25/08/2023'),
  createServiceSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Consulta Veterinária', 'Finalizado', '22/08/2023'),
  createServiceSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Retorno', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Cancelado', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Banho', 'Aguardando Atendimento', '25/08/2023'),
  createServiceSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Consulta Veterinária', 'Finalizado', '22/08/2023'),
  createServiceSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Retorno', 'Em Atendimento', '23/08/2023'),
  createServiceSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Banho & Tosa', 'Cancelado', '23/08/2023'),

];

export const petRowsSample = [
  createPetSample(Math.random(), 'Marley', 'Emanuel Brito Ferreira', 'Cachorro', 'Shi-Tzu', 'male'),
  createPetSample(Math.random(), 'Beethoven', 'Joana Aquiraz Marcedo', 'Cachorro', 'São Bernardo', 'male'),
  createPetSample(Math.random(), 'Bob', 'Emanuel Brito de Souza', 'Gato', 'Persa', 'male'),
  createPetSample(Math.random(), 'Floquinho', 'Andreza Brito Araújo', 'Cachorro', 'RND', 'male'),
  createPetSample(Math.random(), 'Max', 'Jhames Holanda de Nobrega', 'Hamster', 'Sírio', 'male'),
  createPetSample(Math.random(), 'Yumi', 'Caroline de Almeida Prado', 'Cobra', 'Jiboia', 'female'),
  createPetSample(Math.random(), 'Nami', 'Fernanda Albuquerque', 'Gato', 'Siamês', 'female'),
  createPetSample(Math.random(), 'Luffy', 'Ednilson Soares Nascimento', 'Cachorro', 'Pinscher', 'male'),
];

export const tutorRowsSample = [
  createTutorSample(Math.random(), 'Lorenna Paulo Richa', '53356328794', 'lorenna.richa@geradornv.com.br'),
  createTutorSample(Math.random(), 'Odileia Lacerda Vasgestian', '12486131710', 'odileia.vasgestian@geradornv.com.br'),
  createTutorSample(Math.random(), 'Norberto Monnerat Soriano', '47555876973', 'norberto.soriano@geradornv.com.br'),
  createTutorSample(Math.random(), 'Aldemar Mayerhofer Richa', '11132751381', 'aldemar.richa@geradornv.com.br'),
  createTutorSample(Math.random(), 'Wallace Tolentino Lucas', '58739717739', 'wallace.lucas@geradornv.com.br'),
];

export const statusOptions = [
  { label: 'Aguardando Atendimento', value: 1 },
  { label: 'Em Atendimento', value: 2 },
  { label: 'Finalzado', value: 3 },
  { label: 'Cancelado', value: 4 },
]

export const petOptionsSample = [
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c2107dfe87', 'Marley'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c3107dfe87', 'Beethoven'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c4107dfe87', 'Bob'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c6107dfe87', 'Floquinho'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c5107dfe87', 'Max'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c7107dfe87', 'Yumi'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c8107dfe87', 'Nami'),
  createPetOptionSample('c32d8b45-92fe-44f6-8b61-42c9107dfe87', 'Luffy'),
];

export const tutorOptionsSample = [
  createTutorOptionSample('c32d8b45-92fe-44f6-8b61-42c2107dfe87', 'Lorenna Paulo Richa'),
  createTutorOptionSample('c32d8b45-92fe-44f6-8b61-42c3207dfe87', 'Odileia Lacerda Vasgestian'),
  createTutorOptionSample('c32d8b45-92fe-44f6-8b61-42c4307dfe87', 'Norberto Monnerat Soriano'),
  createTutorOptionSample('c32d8b45-92fe-44f6-8b61-42c6407dfe87', 'Aldemar Mayerhofer Richa'),
  createTutorOptionSample('c32d8b45-92fe-44f6-8b61-42c5507dfe87', 'Wallace Tolentino Lucas'),
];

export const adaptToSelectOption = (label: any, value: any) => {
  return { label: label, value: value } as any;
}