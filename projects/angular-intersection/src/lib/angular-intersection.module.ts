import { NgModule } from '@angular/core';
import { EnterViewportDirective } from './directives/enter-viewport.directive';

@NgModule({
  declarations: [EnterViewportDirective],
  exports: [EnterViewportDirective]
})
export class AngularIntersectionModule {}
