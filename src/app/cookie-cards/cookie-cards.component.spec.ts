import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieCardsComponent } from './cookie-cards.component';

describe('CookieCardsComponent', () => {
  let component: CookieCardsComponent;
  let fixture: ComponentFixture<CookieCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
