import { Directive, EventEmitter, Output } from '@angular/core';
import { IntersectionPresentStartExitDirective } from '../present/public-api';

@Directive({
  selector: '[libExitViewport]',
  exportAs: 'libExitViewport'
})
export class ExitViewportDirective extends IntersectionPresentStartExitDirective {
  @Output('libExitViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();
}
