import { IntersectionService } from './abstract.intersection.service';

export interface Callbacks {
  // Callbacks that get executed when an intersection is entering/starting
  enter?: Function;
  // Callbacks that get executed when an intersection is exiting/ending
  exit?: Function;
  // Flag execute registered callbacks only once per element
  once?: boolean;
  // Is used t oddetermine if an intersection is exiting
  isIntersecting?: boolean;
}

export class IntersectionObserverService implements IntersectionService {
  /**
   * The IntersectionObserver instance
   */
  public observer: IntersectionObserver;

  /**
   * A map holding the registered callbacks for enter- and exit-events
   */
  public callbacks: Map<Element, Callbacks> = new Map();

  /**
   * @param rootMargin Margin around the root element
   * @param threshold On which intersectionRatio should we listen
   */
  constructor(
    public rootMargin: string = '0px',
    public threshold: number | number[] = 0.0
  ) {
    this.observer = new IntersectionObserver(
      this.intersectionObserverCallback.bind(this),
      { rootMargin, threshold }
    );
  }

  /**
   * Run the callbacks registered for current element if it is entering
   * the viewport
   *
   * @param entry The IntersectionObserverEntry
   * @param callbacks The callbacks registered for this IntersectionObserverEntry's targt
   */
  public runEnterCallbacks(
    entry: IntersectionObserverEntry,
    callbacks: Callbacks
  ): void {
    if (entry.isIntersecting && callbacks.enter) {
      callbacks.enter(entry);
      // TODO how to not duplicate this? rxjs pipes?
      if (callbacks.once === true) {
        this.unobserveElement(entry.target);
      }
    }
  }

  /**
   * Run the callbacks registered for current element if it is exiting
   * the viewport
   *
   * @param entry The IntersectionObserverEntry
   * @param callbacks The callbacks registered for this IntersectionObserverEntry's targt
   */
  public runExitCallbacks(
    entry: IntersectionObserverEntry,
    callbacks: Callbacks
  ): void {
    if (
      callbacks.exit &&
      // make sure we don't emit during initial pagerendering
      callbacks.isIntersecting === true &&
      // check if element isn't intersecting anymore
      entry.isIntersecting === false
    ) {
      callbacks.exit(entry);
      // TODO how to not duplicate this? rxjs pipes?
      if (callbacks.once === true) {
        this.unobserveElement(entry.target);
      }
    }
    // TODO Explain why! ...and why _here_!
    callbacks.isIntersecting = entry.isIntersecting;
  }

  /** */
  public intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer?: IntersectionObserver
  ): void {
    for (const entry of entries) {
      // Get callbacks bound to this element
      const callbacks = this.callbacks.get(entry.target);
      // Make sure we have registered callbacks inside the Map
      if (callbacks) {
        // Run callbacks when exiting
        this.runExitCallbacks(entry, callbacks);
        // Run callbacks when entering
        this.runEnterCallbacks(entry, callbacks);
      }
    }
  }

  /**
   * @param element The element to unobserve
   */
  public unobserveElement(element: Element): void {
    this.observer.unobserve(element);
    this.callbacks.delete(element);
  }

  /**
   * @param element The element to observe
   * @param callback The callback to be executed when element isIntersecting
   */
  public observeElement(element: Element, callbacks: Callbacks): void {
    this.callbacks.set(element, callbacks);
    this.observer.observe(element);
  }
}
