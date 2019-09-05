import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { Subject } from 'rxjs';
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
    @Inject(ROOT_MARGIN_FUTURE) public rootMarginFuture: string,
    @Inject(ROOT_MARGIN_PAST) public rootMarginPast: string,
    @Inject(ROOT_MARGIN_PRESENT) public rootMarginPresent: string
  ) {
    // this.generateHtml();
  }

  /**
   * Helper method to generate the HTML for all demo boxes
   */
  public generateHtml(): void {
    let html = '';
    for (let index = 0; index < this.dummies.length; index++) {
      const dummy = this.dummies[index];
      html += `<li class="observed" (${dummy.selector})="emitHandler('${dummy.selector}', $event)"><h2>${dummy.selector}</h2><a (click)="resetEmitted($event)" class="reset"><img src="/assets/undo-variant.svg"></a></li>\r\n`;

      if (dummy.selector === 'ngxIntersectionFutureStartExit') {
        html +=
          '<li><h2>...scroll up a bit...</h2><p>(you can see that the last element has emitted now)</p></li>';
      }

      if (dummy.selector === 'ngxIntersectionFutureStartOnceExit') {
        html +=
          "<li><h2>...scroll up a bit and reset...</h2><p>If you then scroll back down and up again, you will see that the element won't emit a second time. It is because all directives having *Once* in their name will be unobserved after the first emit.</p></li>";
      }

      if (index !== this.dummies.length - 1) {
        html += '<li><img src="/assets/arrow-down.svg"></li>\r\n';
      } else {
        html += `<li><h2>...that's it!</h2></li>`;
        html +=
          '<li><a (click)="scrollToTop()"><img src="/assets/arrow-up.svg"></a></li>\r\n';
      }
    }
    console.log(html);
  }

  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  public resetEmitted(event: IntersectionObserverEntry): void {
    event.target.closest('li').classList.remove('emitted');
  }

  public emitHandler(selector: string, event: IntersectionObserverEntry): void {
    event.target.classList.add('emitted');
  }
}
