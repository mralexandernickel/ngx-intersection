import { Callbacks } from './intersection-observer.service';

export abstract class IntersectionService {
  public abstract observeElement: (
    element: Element,
    callbacks: Callbacks
  ) => void;
  public abstract unobserveElement: (element: Element) => void;
}
