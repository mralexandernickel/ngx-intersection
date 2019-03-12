import { NgModule } from '@angular/core';
import { EnterViewportDirective } from './directives/enter-viewport.directive';
import { EnterViewportOnceDirective } from './directives/enter-viewport-once.directive';
import { WillEnterViewportDirective } from './directives/will-enter-viewport.directive';

@NgModule({
  declarations: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective
  ],
  exports: [
    EnterViewportDirective,
    EnterViewportOnceDirective,
    WillEnterViewportDirective
  ]
})
export class AngularIntersectionModule {}
