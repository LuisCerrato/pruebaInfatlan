import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerclimaComponent } from './verclima.component';

describe('VerclimaComponent', () => {
  let component: VerclimaComponent;
  let fixture: ComponentFixture<VerclimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerclimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
