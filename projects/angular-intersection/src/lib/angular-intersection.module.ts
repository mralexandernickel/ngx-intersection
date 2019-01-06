import { NgModule } from '@angular/core';
import { EnterViewportDirective } from './directives/enter-viewport.directive';
import { EnterViewportOnceDirective } from './directives/enter-viewport-once.directive';

@NgModule({
  declarations: [EnterViewportDirective, EnterViewportOnceDirective],
  exports: [EnterViewportDirective, EnterViewportOnceDirective]
})
export class AngularIntersectionModule {}
