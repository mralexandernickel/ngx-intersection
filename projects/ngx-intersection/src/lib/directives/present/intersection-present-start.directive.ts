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

const identifier = 'ngxIntersectionPresentStart';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPresentStartDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentStartService: IntersectionPresentStartService,
    @Inject(PLATFORM_ID) public platformId: object
  ) {
    super(elRef, intersectionPresentStartService, platformId);
  }
}
