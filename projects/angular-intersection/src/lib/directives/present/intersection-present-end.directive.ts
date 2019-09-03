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
  IntersectionPresentEndService,
  Callbacks
} from '../../services/public-api';

const identifier = 'ngxIntersectionPresentEnd';

@Directive({
  selector: `[${identifier}]`,
  exportAs: identifier
})
export class IntersectionPresentEndDirective extends AbstractViewportDirective {
  @Output(identifier) intersectionEmitter: EventEmitter<
    IntersectionObserverEntry
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentEndService: IntersectionPresentEndService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPresentEndService, platformId);
  }
}
