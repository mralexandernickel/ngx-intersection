import { NgModule } from '@angular/core';
import { EnterViewportDirective } from './directives/enter-viewport.directive';
import { EnterViewportOnceDirective } from './directives/enter-viewport-once.directive';
import { WillEnterViewportDirective } from './directives/will-enter-viewport.directive';
import { ExitViewportDirective } from './directives/exit-viewport.directive';

@NgModule({
  declarations: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective,
    ExitViewportDirective
  ],
  exports: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective,
    ExitViewportDirective
  ]
})
export class AngularIntersectionModule {}
