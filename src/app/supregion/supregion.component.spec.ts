import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupregionComponent } from './supregion.component';

describe('SupregionComponent', () => {
  let component: SupregionComponent;
  let fixture: ComponentFixture<SupregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
