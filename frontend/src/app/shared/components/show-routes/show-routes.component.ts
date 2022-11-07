import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-routes',
  templateUrl: './show-routes.component.html',
  styleUrls: ['./show-routes.component.scss'],
})
export class ShowRoutesComponent implements OnInit {
  @Input()
  modalVisibility: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  switchVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }
}
