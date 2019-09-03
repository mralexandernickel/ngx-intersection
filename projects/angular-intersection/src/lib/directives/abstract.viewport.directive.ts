import {
  ElementRef,
  EventEmitter,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IntersectionService } from '../services/abstract.intersection.service';
import { Callbacks } from '../services/intersection-observer.service';

/**
 * TODO will be defined when we implement per-element config
 *
 * So long tslint should ignore this interface, as empty ones aren't allowed
 */
// tslint:disable-next-line
export interface NgxIntersectionConfig {}

export abstract class AbstractViewportDirective implements OnInit, OnDestroy {
  /** */
  public abstract intersectionEmitter: EventEmitter<any>;

  /** */
  public abstract callbacks: Callbacks;

  /**
   * Could be used to add some config across ALL intersection-directives used
   * by an element/component
   *
   * ## Example Usage
   * ```
   * <section
   *   (ngxIntersectionPresentStart)="someMethod($event)"
   *   (ngxIntersectionFutureStart)="someOtherMethod($event)"
   *   [ngxIntersectionConfig]="someConfigUsedByPresentAndFuture">
   *   ...
   * ```
   *
   * ## Important Notes
   *
   * 1. Not used/supported at the moment!
   * 2. Can be read from ngOnInit on (not in constructor!)
   */
  @Input() public ngxIntersectionConfig: NgxIntersectionConfig = {};

  /** */
  constructor(
    public elRef: ElementRef,
    public intersectionService: IntersectionService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  /** */
  public emitIntersection(event: IntersectionObserverEntry | any): void {
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
