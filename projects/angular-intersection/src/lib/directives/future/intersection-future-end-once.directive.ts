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
  IntersectionFutureEndService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionFutureEndOnce';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureEndOnceDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionFutureEndService: IntersectionFutureEndService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionFutureEndService, platformId);
  }
}
