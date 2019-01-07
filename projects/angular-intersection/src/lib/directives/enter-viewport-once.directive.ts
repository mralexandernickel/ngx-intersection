import { Directive, Output, EventEmitter } from '@angular/core';
import { EnterViewportDirective } from './enter-viewport.directive';

@Directive({
  selector: '[libEnterViewportOnce]'
})
export class EnterViewportOnceDirective extends EnterViewportDirective {
  @Output('libEnterViewportOnce') enterViewportOnce: EventEmitter<
    any
  > = new EventEmitter();

  public emitEnter(): void {
    this.enterViewportOnce.emit(true);
  }

  public observeStart(): void {
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
