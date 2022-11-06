import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilboComponent } from './bilbo.component';

describe('BilboComponent', () => {
  let component: BilboComponent;
  let fixture: ComponentFixture<BilboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
