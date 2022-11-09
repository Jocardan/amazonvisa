import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
