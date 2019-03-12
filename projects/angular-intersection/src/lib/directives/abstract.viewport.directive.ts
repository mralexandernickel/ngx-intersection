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

export abstract class AbstractViewportDirective implements OnInit, OnDestroy {
  public abstract intersectionEmitter: EventEmitter<any>;

  constructor(
    public elRef: ElementRef,
    public intersectionService: IntersectionService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  public emitEnter(): void {
    this.intersectionEmitter.emit(true);
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public observeStart(): void {
    if (this.isBrowser()) {
      this.intersectionService.observeElement(
        this.elRef.nativeElement,
        this.emitEnter.bind(this)
      );
    } else {
      this.emitEnter();
    }
  }

  public observeEnd(): void {
    if (this.isBrowser()) {
      this.intersectionService.unobserveElement(this.elRef.nativeElement);
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
