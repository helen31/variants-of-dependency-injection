import { TestBed } from '@angular/core/testing';

import { InquiryBusinessService } from './inquiry-business.service';

describe('InquiryBusinessService', () => {
  let service: InquiryBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
