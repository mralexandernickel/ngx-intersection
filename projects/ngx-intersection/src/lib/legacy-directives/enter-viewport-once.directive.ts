import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionPresentStartOnceDirective } from '../directives/public-api';

@Directive({
  selector: '[libEnterViewportOnce]',
  exportAs: 'libEnterViewportOnce'
})
export class EnterViewportOnceDirective extends IntersectionPresentStartOnceDirective {
  @Output('libEnterViewportOnce') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
