import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiComponentsComponent } from './shared-ui-components.component';

describe('SharedUiComponentsComponent', () => {
  let component: SharedUiComponentsComponent;
  let fixture: ComponentFixture<SharedUiComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedUiComponentsComponent]
    });
    fixture = TestBed.createComponent(SharedUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
