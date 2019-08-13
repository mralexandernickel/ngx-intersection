import { HasEnteredViewportDirective } from './has-entered-viewport.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (libHasEnteredViewport)="testMethod()"></div>
  `
})
class TestHasEnteredViewportComponent {
  public testMethod(): void {
    return;
  }
}

describe('EnterViewportDirective', () => {
  let component: TestHasEnteredViewportComponent;
  let fixture: ComponentFixture<TestHasEnteredViewportComponent>;
  let divDebugElement: DebugElement;
  let hasEnteredViewportDirective: HasEnteredViewportDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHasEnteredViewportComponent,
        HasEnteredViewportDirective
      ]
    });
    fixture = TestBed.createComponent(TestHasEnteredViewportComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    hasEnteredViewportDirective = divDebugElement.injector.get<
      HasEnteredViewportDirective
    >(HasEnteredViewportDirective);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
