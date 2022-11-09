import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { ShowRoutesComponent } from '../shared/components/show-routes/show-routes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[];
  moneyBox: number;

  date: any;
  minDate: any;
  display: boolean = false;
  modalVisibility: boolean = false;

  userSelectedName: string = '';
  userSelectedPayment: string = '';

  language: any;
  @ViewChild('modalChild') modalChild: ShowRoutesComponent | undefined;

  constructor(
    private userService: UserServiceService,
    private config: PrimeNGConfig
  ) {
    this.users = userService.getUsers();
    this.moneyBox = 1273;
    this.language = userService.pt;
  }

  @ViewChild('dt') dt: Table | undefined;

  ngOnInit(): void {
    this.config.setTranslation(this.language);

    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let yesterday = day === 0 ? 30 : day - 1;
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    this.minDate = new Date();
    this.minDate.setDate(yesterday);
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  selectUser(user: any) {
    this.userSelectedName = user.name;
    this.userSelectedPayment = user.payment;
    this.display = true;
  }

  changeModalVisibility() {
    this.modalChild?.switchVisibility();
  }
}
