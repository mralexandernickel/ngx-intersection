import { Directive, Output, EventEmitter } from '@angular/core';
import { IntersectionPresentStartExitDirective } from '../directives/public-api';

@Directive({
  selector: '[libExitViewport]',
  exportAs: 'libExitViewport'
})
export class ExitViewportDirective extends IntersectionPresentStartExitDirective {
  @Output('libExitViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
