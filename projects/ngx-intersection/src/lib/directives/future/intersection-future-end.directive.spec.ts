import { IntersectionFutureEndDirective } from './intersection-future-end.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionFutureEnd)="testMethod()"></div>
  `
})
class TestIntersectionFutureEndComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionFutureEndDirective', () => {
  let component: TestIntersectionFutureEndComponent;
  let fixture: ComponentFixture<TestIntersectionFutureEndComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionFutureEndDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionFutureEndComponent,
        IntersectionFutureEndDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionFutureEndComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionFutureEndDirective>(
      IntersectionFutureEndDirective
    );
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
