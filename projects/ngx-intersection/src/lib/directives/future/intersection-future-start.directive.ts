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

const identifier = 'ngxIntersectionFutureStart';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionFutureStartDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionFutureStartService: IntersectionFutureStartService,
    @Inject(PLATFORM_ID) public platformId: string
  ) {
    super(elRef, intersectionFutureStartService, platformId);
  }
}
