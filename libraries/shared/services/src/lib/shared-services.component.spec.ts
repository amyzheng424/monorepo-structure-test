import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServicesComponent } from './shared-services.component';

describe('SharedServicesComponent', () => {
  let component: SharedServicesComponent;
  let fixture: ComponentFixture<SharedServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedServicesComponent]
    });
    fixture = TestBed.createComponent(SharedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
