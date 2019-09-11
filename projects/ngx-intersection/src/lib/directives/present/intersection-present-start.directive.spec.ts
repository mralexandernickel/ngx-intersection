import { IntersectionPresentStartDirective } from './intersection-present-start.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (ngxIntersectionPresentStart)="testMethod()"></div>
  `
})
class TestIntersectionPresentStartComponent {
  public testMethod(): void {
    return;
  }
}

describe('IntersectionPresentStartDirective', () => {
  let component: TestIntersectionPresentStartComponent;
  let fixture: ComponentFixture<TestIntersectionPresentStartComponent>;
  let divDebugElement: DebugElement;
  let directive: IntersectionPresentStartDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIntersectionPresentStartComponent,
        IntersectionPresentStartDirective
      ]
    });
    fixture = TestBed.createComponent(TestIntersectionPresentStartComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    directive = divDebugElement.injector.get<IntersectionPresentStartDirective>(
      IntersectionPresentStartDirective
    );
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

  it('should only unobserve element on platform browser', () => {
    const spyIsBrowser: jasmine.Spy = spyOn(
      directive,
      'isBrowser'
    ).and.returnValue(false);

    const spyUnobserveElement: jasmine.Spy = spyOn(
      directive.intersectionPresentStartService,
      'unobserveElement'
    );

    directive.ngOnDestroy();
    expect(spyUnobserveElement).not.toHaveBeenCalled();
  });

  it('should call observeEnd and observeStart', () => {
    const spyObserveStart: jasmine.Spy = spyOn(directive, 'observeStart');
    const spyObserveEnd: jasmine.Spy = spyOn(directive, 'observeEnd');
    directive.observeRestart();
    expect(spyObserveStart).toHaveBeenCalled();
    expect(spyObserveEnd).toHaveBeenCalled();
  });
});
