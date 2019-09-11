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
  IntersectionPastStartService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionPastStartOnce';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastStartOnceDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPastStartService: IntersectionPastStartService,
    @Inject(PLATFORM_ID) public platformId: string
  ) {
    super(elRef, intersectionPastStartService, platformId);
  }
}
