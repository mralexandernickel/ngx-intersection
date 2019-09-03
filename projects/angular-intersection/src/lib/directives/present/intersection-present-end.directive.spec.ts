import { IntersectionPresentEndDirective } from './intersection-present-end.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionPresentEnd)="testMethod()"></div>
  `
})
class TestIntersectionPresentEndComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionPresentEndDirective', () => {
  let component: TestIntersectionPresentEndComponent;
  let fixture: ComponentFixture<TestIntersectionPresentEndComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionPresentEndDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionPresentEndComponent,
        IntersectionPresentEndDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionPresentEndComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionPresentEndDirective>(
      IntersectionPresentEndDirective
    );
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
