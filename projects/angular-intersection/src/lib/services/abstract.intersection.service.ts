import { EventEmitter } from '@angular/core';
import { Callbacks } from './intersection-observer.service';

export abstract class IntersectionService {
  public observeElement: (element: Element, callbacks: Callbacks) => void;
  public unobserveElement: (element: Element) => void;
}
