import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable, Inject } from '@angular/core';
import { ROOT_MARGIN_FUTURE } from '../config/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureService extends IntersectionObserverService {
  constructor(@Inject(ROOT_MARGIN_FUTURE) public rootMargin: string) {
    super(rootMargin, 0.0);
  }
}
