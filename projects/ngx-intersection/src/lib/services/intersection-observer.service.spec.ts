import { IntersectionObserverService } from './intersection-observer.service';

const mockClientRect = (): DOMRect => {
  const clientRect = {
    bottom: 1,
    height: 1,
    left: 1,
    right: 1,
    top: 1,
    width: 1,
    x: 1,
    y: 1,
    toJSON: () => JSON.stringify(this)
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
    isIntersecting,
    rootBounds: mockClientRect(),
    target: element,
    time: Date.now()
  };

  return mock as any;
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

  it('should call enter-callback for element if isIntersecting', () => {
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

  it('should call exit-callback for element if !isIntersecting', () => {
    const mockElement = document.createElement('div');
    const foo = {
      enter: (): void => {
        return;
      },
      exit: (): void => {
        return;
      },
      isIntersecting: true
    };
    const entries = mockIntersectionObserverEntries(1, false, mockElement);
    const spyEnterCallback: jasmine.Spy = spyOn(foo, 'enter');
    const spyExitCallback: jasmine.Spy = spyOn(foo, 'exit');
    service.callbacks.set(mockElement, foo);
    service.intersectionObserverCallback(entries);
    expect(spyExitCallback).toHaveBeenCalled();
    expect(spyEnterCallback).not.toHaveBeenCalled();
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

  it('should unobserve element and cleanly teardown if "once" is true', () => {
    const mockElement = document.createElement('div');
    const entries = mockIntersectionObserverEntries(1, false, mockElement);
    service.callbacks.set(mockElement, {
      exit: () => {},
      once: true,
      isIntersecting: true
    });
    const spyUnobserveElement: jasmine.Spy = spyOn(service, 'unobserveElement');
    service.intersectionObserverCallback(entries);
    expect(spyUnobserveElement).toHaveBeenCalled();
  });

  it('should do nothing if no callbacks are registered', () => {
    const mockElement = document.createElement('div');
    const entries = mockIntersectionObserverEntries(1, false, mockElement);
    service.callbacks.clear();
    service.intersectionObserverCallback(entries);
    const spyRunExitCallbacks: jasmine.Spy = spyOn(service, 'runExitCallbacks');
    expect(spyRunExitCallbacks).not.toHaveBeenCalled();
  });

  // it('should do nothing if entry is not intersecting', () => {
  //   const mockElement = document.createElement('div');
  //   const entries = mockIntersectionObserverEntries(1, false, mockElement);
  //   const spyMatchOnceGet: jasmine.Spy = spyOn(service.callbacks, 'get');
  //   service.intersectionObserverCallback(entries);
  //   expect(spyMatchOnceGet).not.toHaveBeenCalled();
  // });
});
