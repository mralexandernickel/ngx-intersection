import { Directive, Output, EventEmitter } from '@angular/core';
import { Callbacks } from '../services/intersection-observer.service';
import { IntersectionPresentStartDirective } from '../directives/public-api';

/**
 * TODO
 *
 * Unify the enter- and exit-callbacks! The differenciation should not be
 * needed anymore!
 *
 * Or maybe it is?!?! When the intersection of an element "exits"?! 🤔
 * --> if so, we need the "exit-state" in all available directives!
 */

@Directive({
  selector: '[libExitViewport]',
  exportAs: 'libExitViewport'
})
export class ExitViewportDirective extends IntersectionPresentStartDirective {
  @Output('libExitViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    exit: this.emitIntersection.bind(this)
  };
}
