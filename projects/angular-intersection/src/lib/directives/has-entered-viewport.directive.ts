import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { AbstractViewportDirective } from './abstract.viewport.directive';
import { Callbacks } from '../services/intersection-observer.service';
import { IntersectionPastService } from '../services/intersection-past.service';

@Directive({
  selector: '[libHasEnteredViewport]',
  exportAs: 'libHasEnteredViewport'
})
export class HasEnteredViewportDirective extends AbstractViewportDirective {
  @Output('libHasEnteredViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPastService: IntersectionPastService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPastService, platformId);
  }
}
