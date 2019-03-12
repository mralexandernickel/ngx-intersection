import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { IntersectionWillEnterService } from '../services/intersection-will-enter.service';
import { AbstractViewportDirective } from './abstract.viewport.directive';

@Directive({
  selector: '[libWillEnterViewport]',
  exportAs: 'libWillEnterViewport'
})
export class WillEnterViewportDirective extends AbstractViewportDirective {
  @Output('libWillEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    public intersectionWillEnterService: IntersectionWillEnterService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionWillEnterService, platformId);
  }
}
