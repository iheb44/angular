import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesfilmsComponent } from './lesfilms.component';

describe('LesfilmsComponent', () => {
  let component: LesfilmsComponent;
  let fixture: ComponentFixture<LesfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesfilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
