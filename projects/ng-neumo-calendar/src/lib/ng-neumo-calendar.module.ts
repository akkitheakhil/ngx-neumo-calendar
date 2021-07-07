import {
    NgNeumoCalendarComponent
} from './components/ng-neumo-calendar/ng-neumo-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    NgNeumoCalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    NgNeumoCalendarComponent
  ]
})
export class NgNeumoCalendarModule { }
