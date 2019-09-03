import { IntersectionFutureStartDirective } from './intersection-future-start.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionFutureStart)="testMethod()"></div>
  `
})
class TestIntersectionFutureStartComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionFutureStartDirective', () => {
  let component: TestIntersectionFutureStartComponent;
  let fixture: ComponentFixture<TestIntersectionFutureStartComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionFutureStartDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionFutureStartComponent,
        IntersectionFutureStartDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionFutureStartComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionFutureStartDirective>(
      IntersectionFutureStartDirective
    );
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
