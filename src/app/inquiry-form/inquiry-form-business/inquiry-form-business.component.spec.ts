import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFormBusinessComponent } from './inquiry-form-business.component';

describe('InquiryFormBusinessComponent', () => {
  let component: InquiryFormBusinessComponent;
  let fixture: ComponentFixture<InquiryFormBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryFormBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryFormBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
