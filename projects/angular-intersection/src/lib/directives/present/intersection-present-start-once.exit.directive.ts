import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionPresentStartOnceDirective } from './intersection-present-start-once.directive';

const identifier = 'ngxIntersectionPresentStartOnceExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPresentStartOnceExitDirective extends IntersectionPresentStartOnceDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this),
    once: true
  };
}
