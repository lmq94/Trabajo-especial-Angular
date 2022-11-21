import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCalculatorComponent } from './int-calculator.component';

describe('IntCalculatorComponent', () => {
  let component: IntCalculatorComponent;
  let fixture: ComponentFixture<IntCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
