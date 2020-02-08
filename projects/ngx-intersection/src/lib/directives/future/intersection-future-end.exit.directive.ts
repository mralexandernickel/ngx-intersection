import { Directive, EventEmitter, Output } from '@angular/core';
import { Callbacks } from '../../services/intersection-observer.service';
import { IntersectionFutureEndDirective } from './intersection-future-end.directive';

const identifier = 'ngxIntersectionFutureEndExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureEndExitDirective extends IntersectionFutureEndDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this)
  };
}
