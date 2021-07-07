# NgxNeumoCalendar

## About

A simple calendar with date picker build for angular using Neumorphism design.

- This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Usage

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

 * angular project


### Installation

1. instaall the package
   ```sh
   npm i ngx-neumo-calendar
   ```
2. Import `NgNeumoCalendarModule`。

```typescript
import { NgNeumoCalendarModule } from 'ngx-neumo-calendar';

@NgModule({
  imports: [ BrowserModule, NgNeumoCalendarModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2、Template

```html
<ng-neumo-calendar (onDateChange)="handleDateChangeEvent($event)"></ng-neumo-calendar>
```

### NgNeumoCalendarEvents

| Name | Type | Summary |
|------|------|---------|
| `onDateChange` | `Date` | Return selected date |


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/akkitheakhil/ngx-neumo-calendar/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!
