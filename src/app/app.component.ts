import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angular-intersection';

  public dummies = [];

  constructor() {
    this.createDummies(20);
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

  public enterHandler(): void {
    console.log('entered');
  }
}
