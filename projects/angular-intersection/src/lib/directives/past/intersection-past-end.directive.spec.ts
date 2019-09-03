import { IntersectionPastEndDirective } from './intersection-past-end.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionPastEnd)="testMethod()"></div>
  `
})
class TestIntersectionPastEndComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionPastEndDirective', () => {
  let component: TestIntersectionPastEndComponent;
  let fixture: ComponentFixture<TestIntersectionPastEndComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionPastEndDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionPastEndComponent,
        IntersectionPastEndDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionPastEndComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionPastEndDirective>(
      IntersectionPastEndDirective
    );
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
