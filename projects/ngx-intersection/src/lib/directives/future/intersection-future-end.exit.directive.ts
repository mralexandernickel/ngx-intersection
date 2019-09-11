import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
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
