import { Directive, EventEmitter, Output } from '@angular/core';
import { IntersectionPresentStartDirective } from '../present/public-api';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective extends IntersectionPresentStartDirective {
  @Output('libEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
