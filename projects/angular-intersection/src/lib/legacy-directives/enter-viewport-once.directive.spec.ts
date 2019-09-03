import { EnterViewportOnceDirective } from './enter-viewport-once.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div (libEnterViewportOnce)="testMethod()"></div>
  `
})
class TestEnterViewportOnceComponent {
  public testMethod(): void {
    return;
  }
}

describe('EnterViewportOnceDirective', () => {
  let component: TestEnterViewportOnceComponent;
  let fixture: ComponentFixture<TestEnterViewportOnceComponent>;
  let divDebugElement: DebugElement;
  let enterViewportOnceDirective: EnterViewportOnceDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestEnterViewportOnceComponent, EnterViewportOnceDirective]
    });
    fixture = TestBed.createComponent(TestEnterViewportOnceComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.css('div'));
    enterViewportOnceDirective = divDebugElement.injector.get<
      EnterViewportOnceDirective
    >(EnterViewportOnceDirective);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call emit', () => {
    const spyEmit: jasmine.Spy = spyOn(
      enterViewportOnceDirective.intersectionEmitter,
      'emit'
    );
    enterViewportOnceDirective.emitIntersection(true);
    expect(spyEmit).toHaveBeenCalled();
  });

  it('should only observe element on platform browser', () => {
    const spyIsBrowser: jasmine.Spy = spyOn(
      enterViewportOnceDirective,
      'isBrowser'
    ).and.returnValue(false);

    const spyObserveElement: jasmine.Spy = spyOn(
      enterViewportOnceDirective.intersectionPresentStartService,
      'observeElement'
    );

    enterViewportOnceDirective.ngOnInit();
    expect(spyObserveElement).not.toHaveBeenCalled();
  });
});
