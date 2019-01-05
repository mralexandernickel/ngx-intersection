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
  selector: '[libEnterViewport]'
})
export class EnterViewportDirective implements OnInit, OnDestroy {
  @Output('libEnterViewport') enterViewport: EventEmitter<
    any
  > = new EventEmitter();

  constructor(
    private elRef: ElementRef,
    public intersectionEnterService: IntersectionEnterService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public emitEnter(): void {
    this.enterViewport.emit(true);
  }

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionEnterService.observeElement(
        this.elRef.nativeElement,
        this.emitEnter.bind(this)
      );
    }
  }

  public ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionEnterService.unobserveElement(this.elRef.nativeElement);
    }
  }
}
