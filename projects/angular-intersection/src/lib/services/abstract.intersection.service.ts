import { EventEmitter } from '@angular/core';

export abstract class IntersectionService {
  public observeElement: (
    element: Element,
    callback: Function,
    once?: true
  ) => void;
  public unobserveElement: (element: Element) => void;
}
