import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { IntersectionEnterService } from '../services/intersection-enter.service';
import { AbstractViewportDirective } from './abstract.viewport.directive';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective extends AbstractViewportDirective {
  @Output('libEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    public intersectionEnterService: IntersectionEnterService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionEnterService, platformId);
  }
}
