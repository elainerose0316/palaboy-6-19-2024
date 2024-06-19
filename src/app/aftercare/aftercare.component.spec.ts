import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercareComponent } from './aftercare.component';

describe('AftercareComponent', () => {
  let component: AftercareComponent;
  let fixture: ComponentFixture<AftercareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
