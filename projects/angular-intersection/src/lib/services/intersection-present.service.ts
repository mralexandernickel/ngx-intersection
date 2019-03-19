import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject, InjectionToken } from '@angular/core';

export const ROOT_MARGIN_PRESENT = new InjectionToken<string>('0px');

@Injectable({
  providedIn: 'root'
})
export class IntersectionPresentService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_PRESENT) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
