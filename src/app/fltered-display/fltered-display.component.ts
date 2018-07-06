import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataGetterService } from '../data-getter.service';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
@Component({
  selector: 'app-fltered-display',
  templateUrl: './fltered-display.component.html',
  styleUrls: ['./fltered-display.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out',
          keyframes([
            style({ opacity: 1})
          ])
        )
      ])
    ])

  ]

})
export class FlteredDisplayComponent implements OnInit {
  @Input() activeDay: string;
  public sampleJson;
  public formatTime(timeIn) {
    const timezoneOffset = new Date(new Date()).getTimezoneOffset()/60;
    const timeStamp = new Date(`August 19, 1975 ${timeIn} GMT+00:00-${timezoneOffset}`);
    const formattedTime = timeStamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return formattedTime;
  }
  public selectRestaurant(name) {
    alert(`you have chosen ${name}`);
  }
  constructor(public service: DataGetterService) {
    this.service.getData().subscribe(data => {
      this.sampleJson = data.dropoffs;
    });
  }

  ngOnInit() {
  }

}
