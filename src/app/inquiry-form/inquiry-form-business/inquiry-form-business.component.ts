import { Component } from '@angular/core';
import { INQUIRY_TOKEN, InquiryFormType, } from '../services/abstract-inquiry.service';
import { inquiryServiceProviderFactory } from '../inquiry-factory-provider';

@Component({
  selector: 'app-inquiry-form-business',
  templateUrl: './inquiry-form-business.component.html',
  styleUrls: ['./inquiry-form-business.component.css'],
  providers: [
    {
      provide: INQUIRY_TOKEN,
      useFactory: inquiryServiceProviderFactory(InquiryFormType.business),
    },
  ],
})
export class InquiryFormBusinessComponent {}
