import { UserServiceService } from 'src/app/services/user-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedName: any;
  filteredNames: any[];
  users: any[];
  moneyBox: number;

  constructor(userService: UserServiceService) {
    this.users = userService.getUsers();
    this.filteredNames = [];
    this.moneyBox = 127;
  }

  @ViewChild('dt') dt: Table | undefined;

  ngOnInit(): void {}

  filterName(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }
    this.filteredNames = filtered;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  selectUser(user: any) {
    console.log(user);
  }
}
