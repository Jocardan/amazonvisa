import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userName: any;
  userWork: any;
  userAddress: any;

  userBirthDate: any;
  userStartDate: any;

  userPhone: any;
  userCPF: any;
  userRG: any;

  userDetail: any;
  autoResize: boolean = true;

  userEmail: any;
  userId: any;

  userSex: any;
  userStatus: any;
  userGrade: any;

  sexList: any[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' },
  ];

  gradeList: any[] = [
    { label: 'Superior completo' },
    { label: 'Superior incompleto' },
    { label: 'Ensino médio completo' },
    { label: 'Ensino médio incompleto' },
    { label: 'Ensino fundamental completo' },
    { label: 'Ensino fundamental incompleto' },
    { label: 'Não sei' },
  ];

  civilStateList: any[] = [
    { label: 'Solteiro' },
    { label: 'Casado' },
    { label: 'Divorciado' },
    { label: 'Viúvo' },
    { label: 'União Estável' },
    { label: 'Não sei' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
