import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionPastStartDirective } from './intersection-past-start.directive';

const identifier = 'ngxIntersectionPastStartExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastStartExitDirective extends IntersectionPastStartDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this)
  };
}
