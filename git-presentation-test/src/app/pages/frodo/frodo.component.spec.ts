import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrodoComponent } from './frodo.component';

describe('FrodoComponent', () => {
  let component: FrodoComponent;
  let fixture: ComponentFixture<FrodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
