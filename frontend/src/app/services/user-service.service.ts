import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  data = [
    {
      name: 'hugo',
      status: 'pendente',
      payment: 'MM/YYYY',
    },
    {
      name: 'Jose',
      status: 'adimplente',
      payment: 'mM/YYYy',
    },
    {
      name: 'Daniel',
      status: 'inadimplente',
      payment: 'Mm/yYYy',
    },
    {
      name: 'Niel',
      status: 'desativado',
      payment: 'mm/yyYy',
    },
  ];
  constructor() {}
  getUsers() {
    return this.data;
  }
}
