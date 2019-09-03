import { NgModule } from '@angular/core';
import {
  IntersectionFutureEndDirective,
  IntersectionFutureEndOnceDirective,
  IntersectionFutureStartDirective,
  IntersectionFutureStartOnceDirective,
  IntersectionFutureEndExitDirective,
  IntersectionFutureEndOnceExitDirective,
  IntersectionFutureStartExitDirective,
  IntersectionFutureStartOnceExitDirective
} from './future/public-api';
import {
  IntersectionPastEndDirective,
  IntersectionPastEndOnceDirective,
  IntersectionPastStartDirective,
  IntersectionPastStartOnceDirective,
  IntersectionPastEndExitDirective,
  IntersectionPastEndOnceExitDirective,
  IntersectionPastStartExitDirective,
  IntersectionPastStartOnceExitDirective
} from './past/public-api';
import {
  IntersectionPresentEndDirective,
  IntersectionPresentEndOnceDirective,
  IntersectionPresentStartDirective,
  IntersectionPresentStartOnceDirective,
  IntersectionPresentEndExitDirective,
  IntersectionPresentEndOnceExitDirective,
  IntersectionPresentStartExitDirective,
  IntersectionPresentStartOnceExitDirective
} from './present/public-api';

@NgModule({
  declarations: [
    // future
    IntersectionFutureEndDirective,
    IntersectionFutureEndExitDirective,
    IntersectionFutureEndOnceDirective,
    IntersectionFutureEndOnceExitDirective,
    IntersectionFutureStartDirective,
    IntersectionFutureStartExitDirective,
    IntersectionFutureStartOnceDirective,
    IntersectionFutureStartOnceExitDirective,
    // past
    IntersectionPastEndDirective,
    IntersectionPastEndExitDirective,
    IntersectionPastEndOnceDirective,
    IntersectionPastEndOnceExitDirective,
    IntersectionPastStartDirective,
    IntersectionPastStartExitDirective,
    IntersectionPastStartOnceDirective,
    IntersectionPastStartOnceExitDirective,
    // present
    IntersectionPresentEndDirective,
    IntersectionPresentEndExitDirective,
    IntersectionPresentEndOnceDirective,
    IntersectionPresentEndOnceExitDirective,
    IntersectionPresentStartDirective,
    IntersectionPresentStartExitDirective,
    IntersectionPresentStartOnceDirective,
    IntersectionPresentStartOnceExitDirective
  ],
  exports: [
    // future
    IntersectionFutureEndDirective,
    IntersectionFutureEndExitDirective,
    IntersectionFutureEndOnceDirective,
    IntersectionFutureEndOnceExitDirective,
    IntersectionFutureStartDirective,
    IntersectionFutureStartExitDirective,
    IntersectionFutureStartOnceDirective,
    IntersectionFutureStartOnceExitDirective,
    // past
    IntersectionPastEndDirective,
    IntersectionPastEndExitDirective,
    IntersectionPastEndOnceDirective,
    IntersectionPastEndOnceExitDirective,
    IntersectionPastStartDirective,
    IntersectionPastStartExitDirective,
    IntersectionPastStartOnceDirective,
    IntersectionPastStartOnceExitDirective,
    // present
    IntersectionPresentEndDirective,
    IntersectionPresentEndExitDirective,
    IntersectionPresentEndOnceDirective,
    IntersectionPresentEndOnceExitDirective,
    IntersectionPresentStartDirective,
    IntersectionPresentStartExitDirective,
    IntersectionPresentStartOnceDirective,
    IntersectionPresentStartOnceExitDirective
  ]
})
export class IntersectionDirectivesModule {}
