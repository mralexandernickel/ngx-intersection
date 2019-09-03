import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import {
  ROOT_MARGIN_FUTURE,
  THRESHOLD_START
} from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureStartService extends IntersectionObserverService {
  constructor(
    @Inject(ROOT_MARGIN_FUTURE) public rootMargin: string,
    @Inject(THRESHOLD_START) public threshold: number
  ) {
    super(rootMargin, threshold);
  }
}
