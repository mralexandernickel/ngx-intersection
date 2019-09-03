import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionFutureStartOnceDirective } from './intersection-future-start-once.directive';

const identifier = 'ngxIntersectionFutureStartOnceExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureStartOnceExitDirective extends IntersectionFutureStartOnceDirective {
  @Output(identifier)
  intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this),
    once: true
  };
}
