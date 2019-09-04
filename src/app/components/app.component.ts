import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  intersectionDirectives,
  ROOT_MARGIN_FUTURE,
  ROOT_MARGIN_PAST,
  ROOT_MARGIN_PRESENT
} from '@mralexandernickel/angular-intersection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angular-intersection';

  public flash$ = new Subject();

  public dummies = intersectionDirectives.map((item: any) => {
    const data = {
      name: item.name,
      selector: item.decorators[0].args[0].selector.slice(1, -1)
    };
    return data;
  });

  constructor(
    public cr: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    @Inject(ROOT_MARGIN_FUTURE) public rootMarginFuture: string,
    @Inject(ROOT_MARGIN_PAST) public rootMarginPast: string,
    @Inject(ROOT_MARGIN_PRESENT) public rootMarginPresent: string
  ) {
    // this.generateHtml();
  }

  public generateHtml(): void {
    let html = '';
    for (const dummy of this.dummies) {
      html += `<li (${dummy.selector})="emitHandler('${dummy.selector}', $event)"><h2>${dummy.selector}</h2></li>\r\n`;
    }
    console.log(html);
  }

  public emitHandler(selector: string, event: IntersectionObserverEntry): void {
    console.log('emit', selector, event);
    this._snackBar.open(`${selector} emitted`, 'OK', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
