import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatSignalementGlobalComponent } from './stat-signalement-global.component';

describe('StatSignalementGlobalComponent', () => {
  let component: StatSignalementGlobalComponent;
  let fixture: ComponentFixture<StatSignalementGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatSignalementGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatSignalementGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
