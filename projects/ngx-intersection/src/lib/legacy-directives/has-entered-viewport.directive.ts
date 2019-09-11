import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionPastStartDirective } from '../directives/public-api';

@Directive({
  selector: '[libHasEnteredViewport]',
  exportAs: 'libHasEnteredViewport'
})
export class HasEnteredViewportDirective extends IntersectionPastStartDirective {
  @Output('libHasEnteredViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
