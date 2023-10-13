import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type: string = 'user';
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formLogin = formBuilder.group({
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      password: [null, Validators.required],
      type: [null, Validators.required],
    });
  }
  formLogin: FormGroup;

  ngOnInit(): void {}

  signIn() {
    // Pega os dados do form de Login
    let formData = this.formLogin.value;

    // Pega todas as chaves do localStorage
    const chaves = Object.keys(localStorage);

    // Encontra todos os usuários que tem o mesmo nome do Login
    let finds = chaves.filter((item: any) => {
      let name = item.split('-')[0];
      return name == formData.nome;
    });

    // Encontou todos
    if (finds.length === 0) {
      alert('Nome de usuário ou senha errado');
    } else {
      let user = finds.find((chave) => {
        let temp: any = JSON.parse(localStorage.getItem(chave)!);
        if (temp.senha === formData.senha) return temp;
      });
      if (!user) alert('Nome de usuário ou senha errado');
      else {
        //sessionStorage.setItem('userLogged', localStorage.getItem(user)!);
        this.router.navigate(['/']);
      }
    }
  }
}
