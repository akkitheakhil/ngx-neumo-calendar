import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface SelectedDate {
  date: number;
  month: number;
  year: number;
}

interface CalDate {
  id: string;
  value: string;
}

interface Calendar {
  prev: CalDate[],
  current: CalDate[],
  next: CalDate[],
}

@Component({
  selector: 'ng-neumo-calendar',
  templateUrl: './ng-neumo-calendar.component.html',
  styleUrls: ['./ng-neumo-calendar.component.scss']
})
export class NgNeumoCalendarComponent implements OnInit {


  @Output() onDateChange = new EventEmitter<Date>();


  currentMonth: string = "";
  currentYear: string = "";
  currentDate!: Date;
  currentselectedDate!: SelectedDate;
  selectedDateValue!: string;
  calendar!: Calendar;

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentselectedDate = { date: this.currentDate.getDate(), month: this.currentDate.getMonth(), year: this.currentDate.getFullYear() };
    this.calendarInit();
  }

  calendarInit() {
    this.currentDate.setDate(1);
    this.currentMonth = this.months[this.currentDate.getMonth()];
    this.currentYear = this.currentDate?.getFullYear()?.toString();

    const lastDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      0
    ).getDate();


    const firstDayIndex = this.currentDate.getDay();

    const lastDayIndex = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    let year = this.currentDate.getFullYear();
    let curDay;
    let id;

    const prev: CalDate[] = [];
    const current: CalDate[] = [];
    const next: CalDate[] = [];

    for (let x = firstDayIndex; x > 0; x--) {
      curDay = prevLastDay - x + 1;
      id = `${curDay},${this.currentDate.getMonth() - 1},${year}`;
      prev.push({ id, value: curDay?.toString() });
    }

    for (let i = 1; i <= lastDay; i++) {
      id = `${i},${this.currentDate.getMonth()},${year}`;

      if (
        this.isSelectedDate(this.currentDate.getMonth(), i, year)
      ) {
        this.selectedDateValue = id;
      }

      current.push({ id, value: i?.toString() });
    }

    for (let j = 1; j <= nextDays; j++) {
      id = `${j},${this.currentDate.getMonth() + 1},${year}`;
      next.push({ id, value: j?.toString() });
    }

    this.calendar = { prev, current, next };

  }


  isSelectedDate(month: number, date: number, year: number) {
    return this.currentselectedDate.date === date && this.currentselectedDate.month === month && this.currentselectedDate.year === year;
  }


  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.calendarInit();
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.calendarInit();
  }

  changeSelectedDate(id: string) {
    this.selectedDateValue = id;
    this.setNewSelectedDate(id);
  }

  setNewSelectedDate(id: string) {
    const ids = id.split(",");
    const day = ids[0];
    let month;
    let year;

    if (Number(ids[1]) === -1) {
      month = 12;
      year = Number(ids[2]) - 1;
    } else if (Number(ids[1]) === 12) {
      month = 1;
      year = Number(ids[2]) + 1;
    } else {
      month = Number(ids[1]) + 1;
      year = Number(ids[2]);
    }

    const foundDate = `${month}-${day}-${year}`;
    const date = new Date(foundDate);
    this.currentselectedDate = { date: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
    this.onDateChange.emit(date);
  }


}
