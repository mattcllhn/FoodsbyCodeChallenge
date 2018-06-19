import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(){
  }
  public daySelected;
  public setNewDay(e){
    console.log('day selected',e);
    this.daySelected = e;
  }
}
