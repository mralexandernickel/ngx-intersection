import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './components/app.component';
import {
  AngularIntersectionModule,
  IntersectionDirectivesModule,
  ROOT_MARGIN_FUTURE,
  ROOT_MARGIN_PAST,
  ROOT_MARGIN_PRESENT
} from '@mralexandernickel/angular-intersection';
import { ScrollMotivationComponent } from './components/scroll-motivation/scroll-motivation.component';

@NgModule({
  declarations: [AppComponent, ScrollMotivationComponent],
  imports: [
    BrowserModule,
    AngularIntersectionModule,
    IntersectionDirectivesModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: ROOT_MARGIN_FUTURE, useValue: '0px' },
    { provide: ROOT_MARGIN_PAST, useValue: '-100px' },
    { provide: ROOT_MARGIN_PRESENT, useValue: '-50px' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
