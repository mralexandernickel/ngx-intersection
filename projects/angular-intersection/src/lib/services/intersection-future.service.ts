import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject, InjectionToken } from '@angular/core';

export const DEFAULT_ROOT_MARGIN_FUTURE = '-200px';

export const ROOT_MARGIN_FUTURE = new InjectionToken<string>(
  'ROOT_MARGIN_FUTURE',
  {
    providedIn: 'root',
    factory: function() {
      return DEFAULT_ROOT_MARGIN_FUTURE;
    }
  }
);

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_FUTURE) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
