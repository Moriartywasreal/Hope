import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-shedule-interview',
  templateUrl: './shedule-interview.component.html',
  styleUrls: ['./shedule-interview.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SheduleInterviewComponent implements OnInit {
  bgColor ='red';
  color = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
