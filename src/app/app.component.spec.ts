import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { FlteredDisplayComponent } from './fltered-display/fltered-display.component'; 
import { DataGetterService } from './data-getter.service'; 
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      declarations: [
        AppComponent, 
        DateSelectorComponent,
        FlteredDisplayComponent
      ],
      providers: [DataGetterService],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
