import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  constructor() { }
  private daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private dt = new Date();
  private currentDateObj = new Date(this.dt);
  private todayIndex = this.currentDateObj.getDay();
  public today;

  ngOnInit() {
    this.today = this.daysOfWeek[this.todayIndex];
    console.log(this.dt, this.currentDateObj, this.todayIndex, this.today);

  }

}
