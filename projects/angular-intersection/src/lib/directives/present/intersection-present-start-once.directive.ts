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
  IntersectionPresentStartService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionPresentStartOnce';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPresentStartOnceDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentStartService: IntersectionPresentStartService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPresentStartService, platformId);
  }
}