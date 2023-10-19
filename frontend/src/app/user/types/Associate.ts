export interface Associate {
  name: string;
  cpf: number;
  rg: number;
  birthDate: string;
  sex: string;
  grade: string;
  civilState: string;
  burgh: string;
  state: string;
  city: string;
  street: string;
  cep: number;
  streetNumber: number;
  complement: string;

  phone: number;
  fixPhone: number;
  work: string;
  email: string;
  startDate: string;
  relationship: Associate;
  dependents: Associate[];

  aux: boolean;
  familiarSalary: number;
  residenceType: string;
  religion: string;

  residents: number;
  livingDate: string;

  status?: string;
}
