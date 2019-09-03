import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../../services/public-api';
import { IntersectionPresentEndDirective } from './intersection-present-end.directive';

const identifier = 'ngxIntersectionPresentEndExit';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPresentEndExitDirective extends IntersectionPresentEndDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this)
  };
}
