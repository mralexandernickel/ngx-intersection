import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { ScrollInformationService } from '../../services/scroll-information.service';

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
