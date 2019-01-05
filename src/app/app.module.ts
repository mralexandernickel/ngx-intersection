import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularIntersectionModule } from '@mralexandernickel/angular-intersection';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularIntersectionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
