import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_PRESENT } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionPresentService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_PRESENT) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
