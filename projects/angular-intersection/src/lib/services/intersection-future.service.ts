import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject, InjectionToken } from '@angular/core';

export const ROOT_MARGIN_FUTURE = new InjectionToken<string>('200px');

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_FUTURE) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
