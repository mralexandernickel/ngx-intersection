import { Directive, EventEmitter, Output } from '@angular/core';
import { IntersectionPastStartDirective } from '../past/public-api';

@Directive({
  selector: '[libHasEnteredViewport]',
  exportAs: 'libHasEnteredViewport'
})
export class HasEnteredViewportDirective extends IntersectionPastStartDirective {
  @Output('libHasEnteredViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
