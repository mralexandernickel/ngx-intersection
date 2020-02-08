import { Directive, EventEmitter, Output } from '@angular/core';
import { IntersectionFutureStartDirective } from '../future/public-api';

@Directive({
  selector: '[libWillEnterViewport]',
  exportAs: 'libWillEnterViewport'
})
export class WillEnterViewportDirective extends IntersectionFutureStartDirective {
  @Output('libWillEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
