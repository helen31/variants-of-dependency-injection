import { TestBed } from '@angular/core/testing';

import { InquiryGeneralService } from './inquiry-general.service';

describe('InquiryGeneralService', () => {
  let service: InquiryGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
