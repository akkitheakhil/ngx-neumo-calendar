import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-neumo-calendar-test';

  printSelectedDate(date: Date) {
    console.log(date);
  }
}

