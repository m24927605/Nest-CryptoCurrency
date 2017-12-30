import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPriceComponent } from './current-price.component';

describe('CurrentPriceComponent', () => {
  let component: CurrentPriceComponent;
  let fixture: ComponentFixture<CurrentPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
