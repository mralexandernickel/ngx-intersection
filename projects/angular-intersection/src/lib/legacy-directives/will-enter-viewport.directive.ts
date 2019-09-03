import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionFutureStartDirective } from '../directives/public-api';

@Directive({
  selector: '[libWillEnterViewport]',
  exportAs: 'libWillEnterViewport'
})
export class WillEnterViewportDirective extends IntersectionFutureStartDirective {
  @Output('libWillEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
