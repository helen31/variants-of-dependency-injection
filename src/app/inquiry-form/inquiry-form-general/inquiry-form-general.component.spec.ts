import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFormGeneralComponent } from './inquiry-form-general.component';

describe('InquiryFormGeneralComponent', () => {
  let component: InquiryFormGeneralComponent;
  let fixture: ComponentFixture<InquiryFormGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryFormGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
