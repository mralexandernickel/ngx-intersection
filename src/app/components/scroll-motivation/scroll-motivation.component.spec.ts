import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollMotivationComponent } from './scroll-motivation.component';

describe('ScrollMotivationComponent', () => {
  let component: ScrollMotivationComponent;
  let fixture: ComponentFixture<ScrollMotivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollMotivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
