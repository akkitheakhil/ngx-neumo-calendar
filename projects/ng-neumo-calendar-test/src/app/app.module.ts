import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgNeumoCalendarModule } from 'ngx-neumo-calendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNeumoCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
