import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IntersectionEnterService } from '../services/intersection-enter.service';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective implements OnInit, OnDestroy {
  @Output('libEnterViewport') enterViewport: EventEmitter<
    any
  > = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    public intersectionEnterService: IntersectionEnterService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public emitEnter(): void {
    this.enterViewport.emit(true);
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public observeStart(): void {
    if (this.isBrowser()) {
      this.intersectionEnterService.observeElement(
        this.elRef.nativeElement,
        this.emitEnter.bind(this)
      );
    } else {
      this.emitEnter();
    }
  }

  public observeEnd(): void {
    if (this.isBrowser()) {
      this.intersectionEnterService.unobserveElement(this.elRef.nativeElement);
    }
  }

  public observeRestart(): void {
    this.observeEnd();
    this.observeStart();
  }

  public ngOnInit(): void {
    this.observeStart();
  }

  public ngOnDestroy(): void {
    this.observeEnd();
  }
}
