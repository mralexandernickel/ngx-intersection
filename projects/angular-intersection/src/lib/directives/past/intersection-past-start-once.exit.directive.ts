import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionPastStartOnceDirective } from './intersection-past-start-once.directive';

const identifier = 'ngxIntersectionPastStartOnceExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastStartOnceExitDirective extends IntersectionPastStartOnceDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this),
    once: true
  };
}
