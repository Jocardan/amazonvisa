import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  form = this.formBuilder.group({
    report: [false],
    title: [null],
    message: [null]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
