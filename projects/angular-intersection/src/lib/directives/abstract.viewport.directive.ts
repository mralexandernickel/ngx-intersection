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
import { IntersectionService } from '../services/abstract.intersection.service';
import { Callbacks } from '../services/intersection-observer.service';

export abstract class AbstractViewportDirective implements OnInit, OnDestroy {
  /** */
  public abstract intersectionEmitter: EventEmitter<any>;

  /** */
  public abstract callbacks: Callbacks;

  /** */
  constructor(
    public elRef: ElementRef,
    public intersectionService: IntersectionService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  /** */
  public emitIntersection(event: any): void {
    this.intersectionEmitter.emit(event);
  }

  /** */
  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /** */
  public observeStart(): void {
    if (this.isBrowser()) {
      this.intersectionService.observeElement(
        this.elRef.nativeElement,
        this.callbacks
      );
    } else {
      this.emitIntersection(true);
    }
  }

  /** */
  public observeEnd(): void {
    if (this.isBrowser()) {
      this.intersectionService.unobserveElement(this.elRef.nativeElement);
    }
  }

  /** */
  public observeRestart(): void {
    this.observeEnd();
    this.observeStart();
  }

  /** */
  public ngOnInit(): void {
    this.observeStart();
  }

  /** */
  public ngOnDestroy(): void {
    this.observeEnd();
  }
}
