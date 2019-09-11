import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionPresentStartDirective } from '../public-api';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective extends IntersectionPresentStartDirective {
  @Output('libEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
