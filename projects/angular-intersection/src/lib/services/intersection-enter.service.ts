import { IntersectionObserverService } from './intersection-observer.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionEnterService extends IntersectionObserverService {
  constructor() {
    super('0px 0px 0px 0px', 0.0);
  }
}
