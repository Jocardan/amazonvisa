import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/shared/types/Partner';
import { Associate } from 'src/app/user/types/Associate';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  partner: Partner;
  userId = '';
  user: Associate;
  
  associate: {
    name: string,
    phone: string,
    cpf: string,
    status: string
  } | undefined;

  constructor() { 
    this.partner = {
      title: 'Bread&Co • padaria e confeitaria',
      street: 'R. Lourenço de Almeida',
      streetNumber: 470,
      phone:  3045.7242,
      description: '10% de desconto em qualquer produto na loja menos no buffet e a la carte.',
      owner: 'Eraldo Júnior',

      city: 'Vitória de Santo Antão',
      state: 'PE',
      burgh: 'Qualquer lugar',
      cep: 5560000,
      complement: 'Avenida',
      email: 'Juniorsempreassim@gmail.com',
      area: 'Peixes',
      cnpj: '124123.12.3412.34.12',
      startDate: new Date().toLocaleDateString('pt-BR')
    }

    this.user = {
      name: 'Josefino Maria Da Silva',
      phone: 123123131,
      cpf: 123123131,
      status: 'Ativo'
    } as Associate
  }

  ngOnInit(): void {
  }

  searchAssociate() {
    const userCpf = this.user.cpf.toString()
    this.associate = {
      name: this.user.name,
      phone: '(**) ****-' + this.user.phone.toString().slice(-4),
      cpf: userCpf.slice(0, 2) + '-***-***-' + userCpf.slice(-2),
      status: this.user.status!
    }
  }

}
