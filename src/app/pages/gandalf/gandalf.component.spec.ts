import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GandalfComponent } from './gandalf.component';

describe('GandalfComponent', () => {
  let component: GandalfComponent;
  let fixture: ComponentFixture<GandalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GandalfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GandalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
