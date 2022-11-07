import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;

  autoResize: boolean = true;
  verify: boolean = false;
  childrenNumber: number = 0;

  religionList: any[] = [
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

  residenceList: any[] = [
    { label: 'Própria Quitada', value: 1 },
    { label: 'Alugada', value: 2 },
    { label: 'Cedida', value: 3 },
    { label: 'Financiada', value: 4 },
    { label: 'Outro', value: 0 },
  ];

  yesNo: any[] = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false },
  ];

  placeList: any[] = [
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

  salaryList: any[] = [
    { label: 'menos de 01 Salário', value: 1 },
    { label: '01 a 02 Salários', value: 2 },
    { label: '03 a 05 Salários', value: 3 },
    { label: 'Mais de 05 Salários', value: 4 },
  ];

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

  constructor(
    private service: UserServiceService,
    private formBuilder: FormBuilder
  ) {
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

      children: this.formBuilder.array([]),

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

  changeChildren(condition: boolean) {
    if (condition) {
      (<FormArray>this.form.controls['children']).push(
        this.formBuilder.group({
          name: [null],
          grade: [null],
          birthDate: [null],
        })
      );
    } else {
      (<FormArray>this.form.controls['children']).removeAt(-1);
    }
  }

  consultaCEP() {
    const cep = '';

    if (cep != null && cep !== '') {
      this.service.consultaCEP(cep)?.subscribe((dados) => console.log(dados));
    }
  }

  onSubmit() {
    console.log(this.form.controls['children'].value);
  }

  backButton() {
    console.log('Voltou')
  }

  ngOnInit(): void {}
}
