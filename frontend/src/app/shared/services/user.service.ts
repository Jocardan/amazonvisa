import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.data;
  }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return;
  }

  public pt = {
    startsWith: 'Começar com',
    contains: 'Contém',
    notContains: 'Não contém',
    endsWith: 'Termina com',
    equals: 'igual',
    notEquals: 'Não é igual',
    noFilter: 'Sem filtro',
    lt: 'Menor que',
    lte: 'Menor que ou igual a',
    gt: 'Maior que',
    gte: 'Maior que ou igual a',
    is: 'É',
    isNot: 'Não é',
    before: 'Antes',
    after: 'Depois',
    dateIs: 'Data é',
    dateIsNot: 'Data não é',
    dateBefore: 'Data é antes',
    dateAfter: 'Data é depois',
    apply: 'Aplicar',
    matchAll: 'Marcar todos',
    matchAny: 'Marcar qualquer',
    addRule: 'Adicionar regra',
    removeRule: 'Remover regra',
    accept: 'Sim',
    reject: 'Não',
    choose: 'Escolher',
    upload: 'Upload',
    cancel: 'Cancelar',
    firstDayOfWeek: 0,
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    today: 'Hoje',
    clear: 'Limpar',
    passwordPrompt: 'Coloque uma senha',
    emptyMessage: 'Resultado não encontrado',
    emptyFilterMessage: 'Resultado não encontrado',
  };
}
