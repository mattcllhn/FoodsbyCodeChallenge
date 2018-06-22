import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { FlteredDisplayComponent } from './fltered-display/fltered-display.component';
import { DataGetterService } from "./data-getter.service";

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    FlteredDisplayComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
