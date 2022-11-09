export interface ListInterface {
  label: string;
  value: string | number | boolean;
}

const religionList: ListInterface[] = [
  { label: 'Adventista do 7° dia', value: 'Adventista do 7° dia' },
  { label: 'Assembléia de Deus', value: 'Assembléia de Deus' },
  { label: 'Batista', value: 'Batista' },
  { label: 'Brasil para Cristo', value: 'Brasil para Cristo' },
  { label: 'Budista', value: 'Budista' },
  { label: 'Candomblé', value: 'Candomblé' },
  { label: 'Catolicismo', value: 'Catolicismo' },
  {
    label: 'Congregação Cristã no Brasil',
    value: 'Congregação Cristã no Brasil',
  },
  { label: 'Cristão', value: 'Cristão' },
  { label: 'Deus é Amor', value: 'Deus é Amor' },
  { label: 'Espiritismo', value: 'Espiritismo' },
  { label: 'Evangelho Quadrangular', value: 'Evangelho Quadrangular' },
  { label: 'Evangélica', value: 'Evangélica' },
  { label: 'Hare Krishna', value: 'Hare Krishna' },
  {
    label: 'Internacional da Graça de Deus',
    value: 'Internacional da Graça de Deus',
  },
  { label: 'Islamismo', value: 'Islamismo' },
  { label: 'Judaismo', value: 'Judaismo' },
  { label: 'Legião da Boa Vontade', value: 'Legião da Boa Vontade' },
  { label: 'Luterana', value: 'Luterana' },
  { label: 'Maranata', value: 'Maranata' },
  { label: 'Messiânica', value: 'Messiânica' },
  { label: 'Metodista', value: 'Metodista' },
  { label: 'Mundial do poder de Deus', value: 'Mundial do poder de Deus' },
  { label: 'Pentecostal', value: 'Pentecostal' },
  { label: 'Presbiteriana', value: 'Presbiteriana' },
  { label: 'Protestante', value: 'Protestante' },
  {
    label: 'Santos dos Últimos Dias (Mórmon)',
    value: 'Santos dos Últimos Dias (Mórmon)',
  },
  { label: 'Satanismo', value: 'Satanismo' },
  { label: 'Seicho-No-le', value: 'Seicho-No-le' },
  { label: 'Testemunha de Jeová', value: 'Testemunha de Jeová' },
  { label: 'Umbanda', value: 'Umbanda' },
  {
    label: 'Universal do Reino de Deus',
    value: 'Universal do Reino de Deus',
  },
  { label: 'Outros', value: 'Outros' },
  { label: 'Sem religião', value: 'Sem religião' },
];

const residenceList: ListInterface[] = [
  { label: 'Própria Quitada', value: 1 },
  { label: 'Alugada', value: 2 },
  { label: 'Cedida', value: 3 },
  { label: 'Financiada', value: 4 },
  { label: 'Outro', value: 0 },
];

const yesNo: ListInterface[] = [
  { label: 'Sim', value: true },
  { label: 'Não', value: false },
];

const placeList: ListInterface[] = [
  { label: 'Alto José Leal', value: 'Alto José Leal' },
  { label: 'Bela vista 2', value: 'Bela vista 2' },
  { label: 'Lot. José de Lemos', value: 'Lot. José de Lemos' },
  { label: 'Lot. Palácio Boa Vista', value: 'Lot. Palácio Boa Vista' },
  { label: 'Lot. de Baú', value: 'Lot. de Baú' },
  { label: 'Lot. Vida Nova', value: 'Lot. Vida Nova' },
  { label: 'Vitória Coqueiros', value: 'Vitória Coqueiros' },
  { label: 'Vale Verde', value: 'Vale Verde' },
  { label: 'Outro', value: 'Outro' },
];

const salaryList: ListInterface[] = [
  { label: 'menos de 01 Salário', value: 1 },
  { label: '01 a 02 Salários', value: 2 },
  { label: '03 a 05 Salários', value: 3 },
  { label: 'Mais de 05 Salários', value: 4 },
];

const sexList: ListInterface[] = [
  { label: 'Masculino', value: 'M' },
  { label: 'Feminino', value: 'F' },
  { label: 'Outro', value: 'O' },
];

const gradeList: ListInterface[] = [
  { label: 'Superior completo', value: 'Superior completo' },
  { label: 'Superior incompleto', value: 'Superior incompleto' },
  { label: 'Ensino médio completo', value: 'Ensino médio completo' },
  { label: 'Ensino médio incompleto', value: 'Ensino médio incompleto' },
  {
    label: 'Ensino fundamental completo',
    value: ' Ensino fundamental completo',
  },
  {
    label: 'Ensino fundamental incompleto',
    value: '  Ensino fundamental incompleto',
  },
  { label: 'Não sei', value: 'Não sei' },
];

const civilStateList: ListInterface[] = [
  { label: 'Solteiro', value: 'Solteiro' },
  { label: 'Casado', value: 'Casado' },
  { label: 'Divorciado', value: 'Divorciado' },
  { label: 'Viúvo', value: 'Viúvo' },
  { label: 'União Estável', value: 'União Estável' },
  { label: 'Não sei', value: 'Não sei' },
];

export {
  yesNo,
  civilStateList,
  gradeList,
  residenceList,
  religionList,
  sexList,
  placeList,
  salaryList,
};
