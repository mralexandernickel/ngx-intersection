import { EnterViewportDirective } from './enter-viewport.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ROOT_MARGIN_PRESENT } from '../services/intersection-present.service';

@Component({
  template: `
    <div (libEnterViewport)="testMethod()"></div>
  `
})
class TestEnterViewportComponent {
  public testMethod(): void {
    return;
  }
}

describe('EnterViewportDirective', () => {
  let component: TestEnterViewportComponent;
  let fixture: ComponentFixture<TestEnterViewportComponent>;
  let divDebugElement: DebugElement;
  let enterViewportDirective: EnterViewportDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestEnterViewportComponent, EnterViewportDirective]
    });
    fixture = TestBed.createComponent(TestEnterViewportComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    enterViewportDirective = divDebugElement.injector.get<
      EnterViewportDirective
    >(EnterViewportDirective);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call emit', () => {
    const spyEmit: jasmine.Spy = spyOn(
      enterViewportDirective.intersectionEmitter,
      'emit'
    );
    enterViewportDirective.emitIntersection(true);
    expect(spyEmit).toHaveBeenCalled();
  });

  it('should only observe element on platform browser', () => {
    const spyIsBrowser: jasmine.Spy = spyOn(
      enterViewportDirective,
      'isBrowser'
    ).and.returnValue(false);

    const spyObserveElement: jasmine.Spy = spyOn(
      enterViewportDirective.intersectionPresentService,
      'observeElement'
    );

    enterViewportDirective.ngOnInit();
    expect(spyObserveElement).not.toHaveBeenCalled();
  });

  it('should only unobserve element on platform browser', () => {
    const spyIsBrowser: jasmine.Spy = spyOn(
      enterViewportDirective,
      'isBrowser'
    ).and.returnValue(false);

    const spyUnobserveElement: jasmine.Spy = spyOn(
      enterViewportDirective.intersectionPresentService,
      'unobserveElement'
    );

    enterViewportDirective.ngOnDestroy();
    expect(spyUnobserveElement).not.toHaveBeenCalled();
  });

  it('should call observeEnd and observeStart', () => {
    const spyObserveStart: jasmine.Spy = spyOn(
      enterViewportDirective,
      'observeStart'
    );
    const spyObserveEnd: jasmine.Spy = spyOn(
      enterViewportDirective,
      'observeEnd'
    );
    enterViewportDirective.observeRestart();
    expect(spyObserveStart).toHaveBeenCalled();
    expect(spyObserveEnd).toHaveBeenCalled();
  });
});
