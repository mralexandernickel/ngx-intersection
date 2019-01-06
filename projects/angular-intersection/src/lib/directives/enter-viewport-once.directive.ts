import {
  Directive,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { EnterViewportDirective } from './enter-viewport.directive';

@Directive({
  selector: '[libEnterViewportOnce]'
})
export class EnterViewportOnceDirective extends EnterViewportDirective
  implements OnInit, OnDestroy {
  @Output('libEnterViewportOnce') enterViewportOnce: EventEmitter<
    any
  > = new EventEmitter();

  public emitEnter(): void {
    this.enterViewportOnce.emit(true);
  }

  public ngOnInit(): void {
    if (this.isBrowser()) {
      this.intersectionEnterService.observeElement(
        this.elRef.nativeElement,
        this.emitEnter.bind(this),
        true
      );
    } else {
      this.emitEnter();
    }
  }
}
