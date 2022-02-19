import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRegionComponent } from './modif-region.component';

describe('ModifRegionComponent', () => {
  let component: ModifRegionComponent;
  let fixture: ComponentFixture<ModifRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
