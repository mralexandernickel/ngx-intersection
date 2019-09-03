import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionPresentStartDirective } from '../directives/public-api';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective extends IntersectionPresentStartDirective {
  @Output('libEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
