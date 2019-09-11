import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { AbstractViewportDirective } from '../abstract.viewport.directive';
import { IntersectionFutureEndService } from '../../services/intersection-future-end.service';
import { Callbacks } from '../../services/intersection-observer.service';

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
    @Inject(PLATFORM_ID) public platformId: string
  ) {
    super(elRef, intersectionFutureEndService, platformId);
  }
}
