import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { AbstractViewportDirective } from '../abstract.viewport.directive';
import {
  IntersectionFutureStartService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionFutureStartOnce';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureStartOnceDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionFutureStartService: IntersectionFutureStartService,
    @Inject(PLATFORM_ID) public platformId: object
  ) {
    super(elRef, intersectionFutureStartService, platformId);
  }
}
