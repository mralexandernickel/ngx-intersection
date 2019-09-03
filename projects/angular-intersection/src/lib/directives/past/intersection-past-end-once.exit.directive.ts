import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionPastEndOnceDirective } from './intersection-past-end-once.directive';

const identifier = 'ngxIntersectionPastEndOnceExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastEndOnceExitDirective extends IntersectionPastEndOnceDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this),
    once: true
  };
}
