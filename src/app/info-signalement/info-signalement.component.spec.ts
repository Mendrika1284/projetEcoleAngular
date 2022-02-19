import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSignalementComponent } from './info-signalement.component';

describe('InfoSignalementComponent', () => {
  let component: InfoSignalementComponent;
  let fixture: ComponentFixture<InfoSignalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSignalementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
