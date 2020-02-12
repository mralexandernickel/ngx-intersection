import { NgModule } from '@angular/core';
import {
  EnterViewportDirective,
  EnterViewportOnceDirective,
  ExitViewportDirective,
  HasEnteredViewportDirective,
  WillEnterViewportDirective
} from '../directives/alias/public-api';

export const directivesAlias = [
  EnterViewportDirective,
  EnterViewportOnceDirective,
  WillEnterViewportDirective,
  ExitViewportDirective,
  HasEnteredViewportDirective
];

@NgModule({
  declarations: directivesAlias,
  exports: directivesAlias
})
export class IntersectionDirectivesAliasModule {}
