import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateSelectorComponent implements OnInit {
@Output()linkSelected:EventEmitter<any> = new EventEmitter();

  constructor() { }
  private daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public displayDays = [];
  private currentDateObj = new Date(new Date());
  private todayIndex = this.currentDateObj.getDay();
  // private todayIndex = 4;
  public buildDayArray(numIn){
    let dayIndex = numIn;
    for (let i = 0; i < 5; i++) {
      if(dayIndex<this.daysOfWeek.length){
        this.displayDays.push(this.daysOfWeek[dayIndex]);
      }else{
        this.displayDays.push(this.daysOfWeek[dayIndex - this.daysOfWeek.length]);
      }
      dayIndex++;
    }
  }
  public linkSelectEmitter(day){
    this.linkSelected.emit(day);
  }
  ngOnInit() {
    this.buildDayArray(this.todayIndex);
  }

}
