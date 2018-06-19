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
  constructor(public service: DataGetterService) {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.sampleJson = data.dropoffs;
    });
  }

  ngOnInit() {
  }

}
