import { Component, OnInit } from '@angular/core';
import { Associate } from '../../types/Associate';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  user: Associate = {} as Associate;
  constructor() {
    this.user = {
      name: 'José Eraldo Alves do Carmo Júnior',
      aux: false,
      streetNumber: 1,
      burgh: 'Alto José Leal',
      birthDate: new Date().toLocaleDateString('pt-BR'),
      city: 'Vitória de Santo Antão',
      civilState: 'Solteiro',
      complement: 'Esquina',
      cpf: 12312312314,
      dependents: [
        { 
          name: 'Josefina',
          grade: 'Ensino Médio Incompleto',
          birthDate: new Date().toLocaleDateString('pt-BR')
        } as Associate
      ],
      startDate: new Date().toLocaleDateString('pt-BR'),
      email: 'Juniorsempreassim@gmail.com',
      fixPhone: 3012341234,
      familiarSalary: 5000,
      grade: 'Ensino Superior',
      livingDate: new Date().toLocaleDateString('pt-BR'),
      residents: 3,
      rg: 12131313,
      cep: 55608210,
      relationship: {
        name: 'tamires',
        birthDate: new Date().toLocaleDateString('pt-BR'),
        rg: 12312341,
        cpf: 12312312314,
        grade: 'Ensino Superior',
        work: 'Nutricionista',
        state: 'PE',
        city: 'Caruaru'
      } as Associate,
      sex: 'Masculino',
      state: 'PE',
      street: 'Rua Paraguassú',
      religion: 'Adventista do Sétimo Dia',
      phone: 8199999999,
      work: 'Digital Influêncer',
      residenceType: 'Casa'
    }
  }

  ngOnInit(): void {}
}