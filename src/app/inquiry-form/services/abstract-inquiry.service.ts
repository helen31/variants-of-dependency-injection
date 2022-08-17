import { FormGroup } from '@angular/forms';
import { InjectionToken } from '@angular/core';

export enum InquiryFormType {
  business = 'business',
  general = 'general'
}

export abstract class AbstractInquiryService {
  abstract getForm(): FormGroup;

  sendData(form: FormGroup): void {
    console.log('sendForm', form);
  }
}

export const INQUIRY_TOKEN = new InjectionToken<AbstractInquiryService>('INQUIRY_TOKEN');
