import { TestBed } from '@angular/core/testing';

import { SharedUiComponentsService } from './shared-ui-components.service';

describe('SharedUiComponentsService', () => {
  let service: SharedUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
