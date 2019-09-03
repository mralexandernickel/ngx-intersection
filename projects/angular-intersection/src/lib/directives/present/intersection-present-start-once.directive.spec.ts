import { IntersectionPresentStartOnceDirective } from './intersection-present-start-once.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionPresentStartOnce)="testMethod()"></div>
  `
})
class TestIntersectionPresentStartOnceComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionPresentStartOnceDirective', () => {
  let component: TestIntersectionPresentStartOnceComponent;
  let fixture: ComponentFixture<TestIntersectionPresentStartOnceComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionPresentStartOnceDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionPresentStartOnceComponent,
        IntersectionPresentStartOnceDirective
      ]
    });
    fixture = TestBed.createComponent(
      TestIntersectionPresentStartOnceComponent
    );
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<
      IntersectionPresentStartOnceDirective
    >(IntersectionPresentStartOnceDirective);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call emit', () => {
    const spyEmit: jasmine.Spy = spyOn(directive.intersectionEmitter, 'emit');
    directive.emitIntersection(true);
    expect(spyEmit).toHaveBeenCalled();
  });

  it('should only observe element on platform browser', () => {
    const spyIsBrowser: jasmine.Spy = spyOn(
      directive,
      'isBrowser'
    ).and.returnValue(false);

    const spyObserveElement: jasmine.Spy = spyOn(
      directive.intersectionPresentStartService,
      'observeElement'
    );

    directive.ngOnInit();
    expect(spyObserveElement).not.toHaveBeenCalled();
  });
});
