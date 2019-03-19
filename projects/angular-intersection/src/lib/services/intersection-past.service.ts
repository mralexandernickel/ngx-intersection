import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_PAST } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionPastService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_PAST) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
