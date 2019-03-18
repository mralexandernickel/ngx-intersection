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
import { IntersectionPresentService } from '../services/intersection-present.service';

@Directive({
  selector: '[libExitViewport]',
  exportAs: 'libExitViewport'
})
export class ExitViewportDirective extends AbstractViewportDirective {
  @Output('libExitViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentService: IntersectionPresentService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPresentService, platformId);
  }
}
