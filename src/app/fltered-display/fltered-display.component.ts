import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataGetterService } from '../data-getter.service';

@Component({
  selector: 'app-fltered-display',
  templateUrl: './fltered-display.component.html',
  styleUrls: ['./fltered-display.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class FlteredDisplayComponent implements OnInit {
@Input() activeDay:string;
  public sampleJson;
  public formatTime(timeIn){
    const timeStamp = new Date(`August 19, 1975 ${timeIn} GMT+00:00-5`);
    const formattedTime = timeStamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return formattedTime;
  }
  constructor(public service: DataGetterService) {
    this.service.getData().subscribe(data => {
      this.sampleJson = data.dropoffs;
    });
  }

  ngOnInit() {
  }

}
