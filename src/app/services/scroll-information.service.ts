import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { fromEvent, BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const DEBOUNCE_TIME = 500;
const FAST_SCROLL_DISTANCE = 35;
const MINIMUM_SCROLL_DISTANCE = 50;

export const enum ScrollDirections {
  none = 0,
  up = 1,
  down = 2
}

export const enum ScrollSpeeds {
  slow = 1,
  regular = 2,
  fast = 3
}

export type ScrollDirection =
  | ScrollDirections.up
  | ScrollDirections.down
  | ScrollDirections.none;
export type ScrollSpeed = ScrollSpeeds.regular | ScrollSpeeds.fast;

export interface IScrollInformation {
  direction: ScrollDirection;
  speed: ScrollSpeed;
  position: number;
}

/**
 * ScrollDirectionService
 * ======================
 *
 * ## Usage
 * ```typescript
 * export class SomeComponent {
 *   constructor(
 *     public scrollInformationService: ScrollInformationService
 *   ) {
 *     this.scrollInformationService
 *       .get()
 *       .pipe(
 *         tap((scrollInformation: IScrollInformation) => {
 *           console.log('Scrollinformation is', scrollInformation)
 *         })
 *       ).subscribe();
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollInformationService {
  /** */
  constructor(
    @Inject(PLATFORM_ID) public platformId: object,
    @Inject(DOCUMENT) public document: any
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      fromEvent(window, 'scroll').subscribe(this.scrollHandler.bind(this));
    }
  }
  /** */
  public isBrowser = false;

  /** */
  public subject = new BehaviorSubject(null);

  /**
   * SetTimeout handle
   */
  private timer: any;

  /**
   * Initial scroll information
   */
  private scrollInformation: IScrollInformation = {
    direction: ScrollDirections.none,
    speed: ScrollSpeeds.regular,
    position: 0
  };

  /**
   * Last saved offset of window
   */
  private lastScrollTop: number =
    window.pageYOffset || this.document.documentElement.scrollTop;

  /**
   * Find out if the body been scrolled to top
   * @param scrollTop current scrollTop position
   */
  public scrolledToTop(scrollTop: number): boolean {
    return scrollTop < MINIMUM_SCROLL_DISTANCE;
  }

  /**
   * Find out if the body been scrolled to bottom
   * @param scrollTop current scrollTop position
   */
  public scrolledToBottom(scrollTop: number): boolean {
    const windowHeight = window.innerHeight;
    const bodyHeight = this.document.body.clientHeight;

    return scrollTop + windowHeight >= bodyHeight - MINIMUM_SCROLL_DISTANCE;
  }

  /**
   * Check if one boundary is reached
   * @param scrollTop current scrollTop position
   */
  public boundaryReached(scrollTop: number): boolean {
    return this.scrolledToTop(scrollTop) || this.scrolledToBottom(scrollTop);
  }

  /** */
  public get(): Observable<IScrollInformation> {
    const scrollTop = this.getScrollTop();
    this.reset(scrollTop);

    return this.subject.pipe(filter(data => !!data));
  }

  /**
   * Detect if the user has stopped scrolling
   */
  private detectStop(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.scrollInformation.direction = ScrollDirections.none;
      this.scrollInformation.speed = ScrollSpeeds.regular;
      this.subject.next(this.scrollInformation);
    }, DEBOUNCE_TIME);
  }

  /**
   * Detect in which direction the user is scrolling
   * @param scrollTop current scrollTop
   */
  private detectDirection(scrollTop: number): void {
    let scrollDirection: ScrollDirection;
    if (scrollTop > this.lastScrollTop) {
      scrollDirection = ScrollDirections.down;
    } else if (scrollTop < this.lastScrollTop) {
      scrollDirection = ScrollDirections.up;
    } else {
      scrollDirection = ScrollDirections.none;
    }
    if (this.scrollInformation.direction !== scrollDirection) {
      this.scrollInformation.speed = ScrollSpeeds.regular;
      // this.scrollInformation.direction = ScrollDirections.none;
      this.scrollInformation.direction = scrollDirection;
      this.subject.next(this.scrollInformation);
    }
  }

  /**
   * Detect how fast the user is scrolling
   * @param scrollTop current scrollTop
   */
  private detectSpeed(scrollTop: number): void {
    const scrollTopDifference = Math.abs(scrollTop - this.lastScrollTop);
    let scrollSpeed: ScrollSpeed = ScrollSpeeds.regular;
    if (scrollTopDifference >= FAST_SCROLL_DISTANCE) {
      scrollSpeed = ScrollSpeeds.fast;
    }
    if (
      this.scrollInformation.speed !== ScrollSpeeds.fast &&
      this.scrollInformation.speed !== scrollSpeed
    ) {
      this.scrollInformation.speed = scrollSpeed;
      this.subject.next(this.scrollInformation);
    }
  }

  /**
   * Reset scroll information
   */
  private reset(scrollTop: number): void {
    this.scrollInformation = {
      direction: ScrollDirections.none,
      speed: ScrollSpeeds.regular,
      position: scrollTop
    };
    this.subject.next(this.scrollInformation);
  }

  /** */
  public getScrollTop(): number {
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    return scrollTop;
  }

  /**
   * Callback function for the onscroll event-listener
   */
  private scrollHandler(): void {
    const scrollTop = this.getScrollTop();
    this.scrollInformation.position = scrollTop;

    if (this.boundaryReached(scrollTop)) {
      this.reset(scrollTop);
    } else {
      this.detectStop();
      this.detectDirection(scrollTop);
      this.detectSpeed(scrollTop);
    }

    this.lastScrollTop = scrollTop;
  }
}
