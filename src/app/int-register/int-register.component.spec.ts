import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntRegisterComponent } from './int-register.component';

describe('IntRegisterComponent', () => {
  let component: IntRegisterComponent;
  let fixture: ComponentFixture<IntRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
