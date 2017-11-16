/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VeyoExampleService } from './veyo-example.service';

describe('VeyoExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeyoExampleService]
    });
  });

  it('should ...', inject([VeyoExampleService], (service: VeyoExampleService) => {
    expect(service).toBeTruthy();
  }));
});
