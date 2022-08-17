import { Component } from '@angular/core';
import { INQUIRY_TOKEN, InquiryFormType, } from '../services/abstract-inquiry.service';
import { inquiryServiceProviderFactory } from '../inquiry-factory-provider';

@Component({
  selector: 'app-inquiry-form-general',
  templateUrl: './inquiry-form-general.component.html',
  styleUrls: ['./inquiry-form-general.component.css'],
  providers: [
    {
      provide: INQUIRY_TOKEN,
      useFactory: inquiryServiceProviderFactory(InquiryFormType.general),
    },
  ],
})
export class InquiryFormGeneralComponent {}
