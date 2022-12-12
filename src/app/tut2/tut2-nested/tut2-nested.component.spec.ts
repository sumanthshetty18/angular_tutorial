import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut2NestedComponent } from './tut2-nested.component';

describe('Tut2NestedComponent', () => {
  let component: Tut2NestedComponent;
  let fixture: ComponentFixture<Tut2NestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut2NestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut2NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
