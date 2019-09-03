import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_FUTURE, THRESHOLD_END } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureEndService extends IntersectionObserverService {
  constructor(
    @Inject(ROOT_MARGIN_FUTURE) public rootMargin: string,
    @Inject(THRESHOLD_END) public threshold: number
  ) {
    super(rootMargin, threshold);
  }
}
