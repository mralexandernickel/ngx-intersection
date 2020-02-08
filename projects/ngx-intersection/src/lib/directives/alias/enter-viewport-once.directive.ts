import { Directive, EventEmitter, Output } from '@angular/core';
import { IntersectionPresentStartOnceDirective } from '../present/public-api';

@Directive({
  selector: '[libEnterViewportOnce]',
  exportAs: 'libEnterViewportOnce'
})
export class EnterViewportOnceDirective extends IntersectionPresentStartOnceDirective {
  @Output('libEnterViewportOnce') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
