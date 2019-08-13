import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { EnterViewportDirective } from './enter-viewport.directive';
import { Callbacks } from '../services/intersection-observer.service';
import { IntersectionPresentService } from '../services/intersection-present.service';
import { AbstractViewportDirective } from './abstract.viewport.directive';

@Directive({
  selector: '[libEnterViewportOnce]',
  exportAs: 'libEnterViewportOnce'
})
export class EnterViewportOnceDirective extends AbstractViewportDirective {
  @Output('libEnterViewportOnce') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this),
    once: true
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentService: IntersectionPresentService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPresentService, platformId);
  }
}
