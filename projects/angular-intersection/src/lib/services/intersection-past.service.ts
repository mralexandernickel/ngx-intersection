import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject, InjectionToken } from '@angular/core';

export const DEFAULT_ROOT_MARGIN_PAST = '-200px';

export const ROOT_MARGIN_PAST = new InjectionToken<string>('ROOT_MARGIN_PAST', {
  providedIn: 'root',
  factory: function() {
    return DEFAULT_ROOT_MARGIN_PAST;
  }
});

@Injectable({
  providedIn: 'root'
})
export class IntersectionPastService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_PAST) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
