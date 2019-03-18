import { Directive, Output, EventEmitter } from '@angular/core';
import { EnterViewportDirective } from './enter-viewport.directive';
import { Callbacks } from '../services/intersection-observer.service';

@Directive({
  selector: '[libEnterViewportOnce]',
  exportAs: 'libEnterViewportOnce'
})
export class EnterViewportOnceDirective extends EnterViewportDirective {
  @Output('libEnterViewportOnce') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };
}
