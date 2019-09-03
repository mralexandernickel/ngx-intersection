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
  IntersectionPastEndService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionPastEndOnce';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastEndOnceDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPastEndService: IntersectionPastEndService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPastEndService, platformId);
  }
}
