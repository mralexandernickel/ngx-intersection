import { NgModule } from '@angular/core';
import { directivesAlias } from './intersection-directives-alias.module';
/**
 * This module is here only for legacy-reasons, but since it doesn't hold *any*
 * own logic we can easily keep on releasing it.
 */
@NgModule({
  declarations: directivesAlias,
  exports: directivesAlias
})
export class AngularIntersectionModule {}
