import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_PAST, THRESHOLD_START } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionPastStartService extends IntersectionObserverService {
  constructor(
    @Inject(ROOT_MARGIN_PAST) public rootMargin: string,
    @Inject(THRESHOLD_START) public threshold: number
  ) {
    super(rootMargin, threshold);
  }
}
