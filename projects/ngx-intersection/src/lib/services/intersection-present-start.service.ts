import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import {
  ROOT_MARGIN_PRESENT,
  THRESHOLD_START
} from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionPresentStartService extends IntersectionObserverService {
  constructor(
    @Inject(ROOT_MARGIN_PRESENT) public rootMargin: string,
    @Inject(THRESHOLD_START) public threshold: number
  ) {
    super(rootMargin, threshold);
  }
}
