import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionFutureService extends IntersectionObserverService {
  constructor() {
    super('200px', 0.0);
  }
}
