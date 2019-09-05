import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_PAST, THRESHOLD_END } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionPastEndService extends IntersectionObserverService {
  constructor(
    @Inject(ROOT_MARGIN_PAST) public rootMargin: string,
    @Inject(THRESHOLD_END) public threshold: number
  ) {
    super(rootMargin, 1.0);
  }
}
