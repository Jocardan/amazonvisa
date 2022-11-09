import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  formLogin = new FormGroup({
    nome: new FormControl(''),
    senha: new FormControl(''),
  });

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
        sessionStorage.setItem('userLogged', localStorage.getItem(user)!);
        this.router.navigate(['/home']);
      }
    }
  }
}
