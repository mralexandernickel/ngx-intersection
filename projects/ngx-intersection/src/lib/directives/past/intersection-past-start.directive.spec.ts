import { IntersectionPastStartDirective } from './intersection-past-start.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionPastStart)="testMethod()"></div>
  `
})
class TestIntersectionPastStartComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionPastStartDirective', () => {
  let component: TestIntersectionPastStartComponent;
  let fixture: ComponentFixture<TestIntersectionPastStartComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionPastStartDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionPastStartComponent,
        IntersectionPastStartDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionPastStartComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionPastStartDirective>(
      IntersectionPastStartDirective
    );
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
