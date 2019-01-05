import 'intersection-observer';

export class IntersectionObserverService {
  private observer: IntersectionObserver;

  private callbacks: Map<Element, Function> = new Map();

  constructor(
    public rootMargin: string = '0px 0px 0px 0px',
    public threshold: number | number[] = 0.0
  ) {
    const options = {
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
    observer: IntersectionObserver
  ): any {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.callbacks.get(entry.target)();
      }
    }
  }

  public unobserveElement(element: Element): void {
    this.observer.unobserve(element);
    this.callbacks.delete(element);
  }

  public observeElement(element: Element, callback: Function): void {
    this.callbacks.set(element, callback);
    this.observer.observe(element);
  }
}
