import { NgModule } from '@angular/core';
import { IntersectionDirectivesAliasModule } from './intersection-directives-alias.module';
/**
 * This module is here only for legacy-reasons, but since it doesn't hold *any*
 * own logic we can easily keep on releasing it.
 */
@NgModule({
  imports: [IntersectionDirectivesAliasModule]
})
export class AngularIntersectionModule {}
