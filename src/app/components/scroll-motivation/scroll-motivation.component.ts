import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { ScrollInformationService } from '../../services/scroll-information.service';
import { pluck, map, distinctUntilChanged, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const SCROLLED_OFFSET = 50;

@Component({
  selector: 'app-scroll-motivation',
  template: '<div class="scroll-motivation visible"></div>',
  styleUrls: ['./scroll-motivation.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollMotivationComponent implements OnInit {
  public scrolledDown$: Observable<boolean>;

  constructor(public scrollInformationService: ScrollInformationService) {}

  public ngOnInit(): void {
    this.scrolledDown$ = this.scrollInformationService.get().pipe(
      pluck('position'),
      map((position: number) => !(position > SCROLLED_OFFSET)),
      distinctUntilChanged()
    );
  }
}
