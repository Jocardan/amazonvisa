import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(private service: UserService) {
    this.userData = service.getUserData();
  }

  ngOnInit(): void {}

  display: boolean = false;
  userData: {}[] = [];
  name: string = 'José Daniel';
  situation: string = 'Ativo';

  showDisplay() {
    this.display = true;
  }
}
