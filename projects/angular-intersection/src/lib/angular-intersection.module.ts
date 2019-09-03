import { NgModule } from '@angular/core';
import { EnterViewportDirective } from './legacy-directives/enter-viewport.directive';
import { EnterViewportOnceDirective } from './legacy-directives/enter-viewport-once.directive';
import { WillEnterViewportDirective } from './legacy-directives/will-enter-viewport.directive';
import { ExitViewportDirective } from './legacy-directives/exit-viewport.directive';
import { HasEnteredViewportDirective } from './legacy-directives/has-entered-viewport.directive';

@NgModule({
  declarations: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective,
    ExitViewportDirective,
    HasEnteredViewportDirective
  ],
  exports: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective,
    ExitViewportDirective,
    HasEnteredViewportDirective
  ]
})
export class AngularIntersectionModule {}
