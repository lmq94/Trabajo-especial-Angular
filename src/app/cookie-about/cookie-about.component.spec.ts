import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieAboutComponent } from './cookie-about.component';

describe('CookieAboutComponent', () => {
  let component: CookieAboutComponent;
  let fixture: ComponentFixture<CookieAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
