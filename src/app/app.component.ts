import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angular-intersection';

  public dummies = [];

  constructor(public cr: ChangeDetectorRef) {
    this.createDummies(1);
  }

  public createDummies(num: number): void {
    let i = 0;
    while (i < num) {
      this.dummies.push({
        value: i + 1
      });
      i++;
    }
  }

  public emitHandler(dummy: any, event: any): void {
    console.log('emit', dummy.value, event);
  }
}
