import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: any[];
  moneyBox: number;

  date: any;
  minDate: any;

  userSelectedName: string = '';
  userSelectedPayment: string = '';

  language: any;

  constructor(private userService: UserService, private config: PrimeNGConfig) {
    this.users = userService.getUsers();
    this.moneyBox = 1273;
    this.language = userService.pt;
  }

  @ViewChild('dt') dt: Table | undefined;

  ngOnInit(): void {
    this.config.setTranslation(this.language);
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
