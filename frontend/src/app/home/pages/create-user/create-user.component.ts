import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeFacade } from '../../home.facade';

import {
  civilStateList,
  gradeList,
  placeList,
  religionList,
  residenceList,
  salaryList,
  sexList,
  yesNo,
  ListInterface,
} from '../../types/form';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;

  formList: ListInterface[][] = [];
  autoResize: boolean = true;
  verify: boolean = false;

  constructor(private facade: HomeFacade, private formBuilder: FormBuilder) {
    this.formList = [
      civilStateList,
      gradeList,
      placeList,
      religionList,
      residenceList,
      salaryList,
      sexList,
      yesNo,
    ];

    this.form = this.formBuilder.group({
      person: this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        cpf: [null, [Validators.required]],
        rg: [null, [Validators.required]],
        birthDate: [null, [Validators.required]],
        sex: [null, [Validators.required]],
        grade: [null, [Validators.required]],
        civilState: ['', [Validators.required]],
        cod: [null],
      }),

      address: this.formBuilder.group({
        bairro: [null],
        cep: [null],
        state: [null],
        city: [null],
        street: [null],
        numberStreet: [null],
        complement: [null],
      }),

      relationship: this.formBuilder.group({
        name: [null],
        cpf: [null],
        rg: [null],
        birthDate: [null],
        grade: [null],
        work: [null],
        state: [null],
        city: [null],
      }),

      dependents: this.formBuilder.array([]),

      phone: [null],
      fixPhone: [null],
      work: [null],
      email: [null, Validators.email],
      startDate: [null],

      aux: [null, [Validators.required]],
      moradores: [null, [Validators.required]],
      familiarSalary: [null, [Validators.required]],
      residenceType: [null, [Validators.required]],
      religion: [null, [Validators.required]],

      others: [{ value: 0, disabled: true }, Validators.required],
      year: [null],
      month: [null],
    });
  }

  verifyValidTouched(field: string) {
    this.form.get(field);
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }

  changeCondition(condition: boolean, field: string) {
    if (condition) {
      this.form.controls[field].enable();
    } else {
      this.form.controls[field].disable();
    }
  }

  changeOthers(condition: boolean) {
    if (condition) {
      (<FormArray>this.form.controls['dependents']).push(
        this.formBuilder.group({
          name: [null],
          grade: [null],
          birthDate: [null],
        })
      );
    } else {
      (<FormArray>this.form.controls['dependents']).removeAt(-1);
    }
  }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.facade.getAddress(cep);
      } else {
        return 'CEP inválido';
      }
    } else {
      return 'Digite CEP';
    }
  }

  onSubmit() {
    console.log(this.form.controls['dependents'].value);
  }

  ngOnInit(): void {}
}
