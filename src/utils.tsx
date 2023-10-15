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

export function createTutorSample(
  id: number,
  tutor_name: string,
  tutor_cpf: string,
  tutor_email: string,
  birth_date: string,
  archived: boolean
) {
  return { id, tutor_name, tutor_cpf, tutor_email, birth_date, archived };
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

// export const tutorRowsSample = [
//   createTutorSample(Math.random(), 'Lorenna Paulo Richa', '533.563.287-94', 'lorenna.richa@geradornv.com.br'),
//   createTutorSample(Math.random(), 'Odileia Lacerda Vasgestian', '124.861.317-10', 'odileia.vasgestian@geradornv.com.br'),
//   createTutorSample(Math.random(), 'Norberto Monnerat Soriano', '475.558.769-73', 'norberto.soriano@geradornv.com.br'),
//   createTutorSample(Math.random(), 'Aldemar Mayerhofer Richa', '111.327.513-81', 'aldemar.richa@geradornv.com.br'),
//   createTutorSample(Math.random(), 'Wallace Tolentino Lucas', '587.397.177-39', 'wallace.lucas@geradornv.com.br'),
// ];

export const adaptToSelectOption = (label: any, value: any) => {
  return { label: label, value: value } as any;
}

export function addressAdapter(address:string):any{
  let longAdress  = address.split(',');
  return {
    streetName: longAdress[0] ? longAdress[0].trim() || 'Teste' : 'Teste', 
    cep: 0, 
    number: longAdress[1] ? longAdress[1].trim() || '-' : '-', 
    district: longAdress[2] ? longAdress[2].trim() || '-' : '-', 
    city:'-',
    additionalInformation:'-'
  }
}

export function dateAdapter(date:string):string{
    let [day,month,year] = date.split("/");

    return `${year}-${month}-${day}`
}

export function tutorAdapter(newTutor:any):any{

    let tutor = {
      name: newTutor.tutor_name,
      birthDate: dateAdapter(newTutor.birth_date),
      cpf: newTutor.tutor_cpf,
      email: newTutor.tutor_email,
      addresses: [
          addressAdapter(newTutor.address)
      ],
      telephones: [
        {
          description: 'Principal',
          phoneNumber: newTutor.phone
        }
      ]
  }
  console.log(`dados enviados${tutor}`);
  return tutor;
}