import { IntersectionObserverService } from './intersection-observer.service';

const mockClientRect = (): ClientRect => {
  const clientRect = {
    bottom: 1,
    height: 1,
    left: 1,
    right: 1,
    top: 1,
    width: 1
  };

  return clientRect;
};

const mockIntersectionObserverEntry = (
  element: Element,
  isIntersecting: boolean
): IntersectionObserverEntry => {
  const mock = {
    boundingClientRect: mockClientRect(),
    intersectionRatio: 1,
    intersectionRect: mockClientRect(),
    isIntersecting: isIntersecting,
    rootBounds: mockClientRect(),
    target: element,
    time: Date.now()
  };

  return mock;
};

const mockIntersectionObserverEntries = (
  numEntries: number,
  isIntersecting: boolean,
  element: Element = new Element()
): IntersectionObserverEntry[] => {
  const entries = [];
  let i = 0;
  while (i < numEntries) {
    entries.push(mockIntersectionObserverEntry(element, isIntersecting));
    i++;
  }

  return entries;
};

describe('IntersectionObserverService', () => {
  let service: IntersectionObserverService;

  beforeEach(() => {
    service = new IntersectionObserverService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call callback for element if isIntersecting', () => {
    const mockElement = document.createElement('div');
    const foo = {
      enter: (): void => {
        return;
      }
    };
    const entries = mockIntersectionObserverEntries(1, true, mockElement);
    const spyMockCallback: jasmine.Spy = spyOn(foo, 'enter');
    service.callbacks.set(mockElement, foo);
    service.intersectionObserverCallback(entries);
    expect(spyMockCallback).toHaveBeenCalled();
  });

  it('should unobserve element and cleanly teardown if "once" is true', () => {
    const mockElement = document.createElement('div');
    const entries = mockIntersectionObserverEntries(1, true, mockElement);
    service.callbacks.set(mockElement, {
      enter: () => {},
      once: true
    });
    const spyUnobserveElement: jasmine.Spy = spyOn(service, 'unobserveElement');
    service.intersectionObserverCallback(entries);
    expect(spyUnobserveElement).toHaveBeenCalled();
  });

  it('should do nothing if entry is not intersecting', () => {
    const mockElement = document.createElement('div');
    const entries = mockIntersectionObserverEntries(1, false, mockElement);
    const spyMatchOnceGet: jasmine.Spy = spyOn(service.callbacks, 'get');
    service.intersectionObserverCallback(entries);
    expect(spyMatchOnceGet).not.toHaveBeenCalled();
  });
});
