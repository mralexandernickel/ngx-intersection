import 'intersection-observer';

export class IntersectionObserverService {
  private observer: IntersectionObserver;

  public callbacks: Map<Element, Function> = new Map();

  public matchOnce: Map<Element, true> = new Map();

  constructor(
    public rootMargin: string = '0px 0px 0px 0px',
    public threshold: number | number[] = 0.0
  ) {
    const options: IntersectionObserverInit = {
      rootMargin: rootMargin,
      threshold: threshold
    };

    this.observer = new IntersectionObserver(
      this.intersectionObserverCallback.bind(this),
      options
    );
  }

  public intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer?: IntersectionObserver
  ): any {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const element = entry.target;
        this.callbacks.get(element)();
        if (this.matchOnce.get(element)) {
          this.unobserveElement(element);
          this.matchOnce.delete(element);
        }
      }
    }
  }

  public unobserveElement(element: Element): void {
    this.observer.unobserve(element);
    this.callbacks.delete(element);
  }

  public observeElement(
    element: Element,
    callback: Function,
    once?: true
  ): void {
    this.callbacks.set(element, callback);
    if (once) {
      this.matchOnce.set(element, once);
    }
    this.observer.observe(element);
  }
}
