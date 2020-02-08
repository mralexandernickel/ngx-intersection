import { Directive, EventEmitter, Output } from '@angular/core';
import { Callbacks } from '../../services/intersection-observer.service';
import { IntersectionFutureEndOnceDirective } from './intersection-future-end-once.directive';

const identifier = 'ngxIntersectionFutureEndOnceExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureEndOnceExitDirective extends IntersectionFutureEndOnceDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this),
    once: true
  };
}
