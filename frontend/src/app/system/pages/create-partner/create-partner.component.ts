import { Component, OnInit } from '@angular/core';
import { stateList } from '../../types/form'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss'],
})
export class CreatePartnerComponent implements OnInit {
  partnerName: any;
  partnerAddress: any;

  partnerStartDate: any;

  partnerContact: any;
  partnerCPF: any;
  partnerCNPJ: any;

  partnerDescription: any;
  autoResize: boolean = true;

  states = stateList

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tittle: [null, [Validators.required, Validators.minLength(5)]],
      cpf: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],

      address: this.formBuilder.group({
        burgh: [null],
        cep: [null],
        state: [null],
        city: [null],
        street: [null],
        streetNumber: [null],
        complement: [null],
      }),

      phone: [null],
      startDate: [null],

      description: [null]
    });
  }

  ngOnInit(): void {}
}
