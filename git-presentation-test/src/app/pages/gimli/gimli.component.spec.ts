import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimliComponent } from './gimli.component';

describe('GimliComponent', () => {
  let component: GimliComponent;
  let fixture: ComponentFixture<GimliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
