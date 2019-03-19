import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject, InjectionToken } from '@angular/core';

export const DEFAULT_ROOT_MARGIN_PRESENT = '0px';

export const ROOT_MARGIN_PRESENT = new InjectionToken<string>(
  'ROOT_MARGIN_PRESENT',
  {
    providedIn: 'root',
    factory: function() {
      return DEFAULT_ROOT_MARGIN_PRESENT;
    }
  }
);

@Injectable({
  providedIn: 'root'
})
export class IntersectionPresentService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_PRESENT) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
