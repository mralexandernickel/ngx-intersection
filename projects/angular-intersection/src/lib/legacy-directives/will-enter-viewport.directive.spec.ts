import { WillEnterViewportDirective } from './will-enter-viewport.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (libWillEnterViewport)="testMethod()"></div>
  `
})
class TestWillEnterViewportComponent {
  public testMethod(): void {
    return;
  }
}

describe('WillEnterViewportDirective', () => {
  let component: TestWillEnterViewportComponent;
  let fixture: ComponentFixture<TestWillEnterViewportComponent>;
  let divDebugElement: DebugElement;
  let willEnterViewportDirective: WillEnterViewportDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestWillEnterViewportComponent, WillEnterViewportDirective]
    });
    fixture = TestBed.createComponent(TestWillEnterViewportComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    willEnterViewportDirective = divDebugElement.injector.get<
      WillEnterViewportDirective
    >(WillEnterViewportDirective);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
