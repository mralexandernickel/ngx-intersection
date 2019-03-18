import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { AbstractViewportDirective } from './abstract.viewport.directive';
import { IntersectionFutureService } from '../services/intersection-future.service';
import { Callbacks } from '../services/intersection-observer.service';

@Directive({
  selector: '[libWillEnterViewport]',
  exportAs: 'libWillEnterViewport'
})
export class WillEnterViewportDirective extends AbstractViewportDirective {
  @Output('libWillEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionFutureService: IntersectionFutureService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionFutureService, platformId);
  }
}
