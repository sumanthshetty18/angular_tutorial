import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut4Component } from './tut4.component';

describe('Tut4Component', () => {
  let component: Tut4Component;
  let fixture: ComponentFixture<Tut4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
