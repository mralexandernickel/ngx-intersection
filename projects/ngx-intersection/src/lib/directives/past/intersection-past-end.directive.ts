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

const identifier = 'ngxIntersectionPastEnd';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPastEndDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPastEndService: IntersectionPastEndService,
    @Inject(PLATFORM_ID) public platformId: string
  ) {
    super(elRef, intersectionPastEndService, platformId);
  }
}
