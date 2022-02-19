import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementaffecterComponent } from './signalementaffecter.component';

describe('SignalementaffecterComponent', () => {
  let component: SignalementaffecterComponent;
  let fixture: ComponentFixture<SignalementaffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalementaffecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementaffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
