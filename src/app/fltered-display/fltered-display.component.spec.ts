import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlteredDisplayComponent } from './fltered-display.component';

describe('FlteredDisplayComponent', () => {
  let component: FlteredDisplayComponent;
  let fixture: ComponentFixture<FlteredDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlteredDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlteredDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
