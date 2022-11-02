import { FormGroup } from '@angular/forms';
import { InjectionToken } from '@angular/core';

export enum InquiryFormType {
  business = 'business',
  general = 'general'
}

export interface InquiryServiceInterface {
  type: InquiryFormType;
  getForm: () => FormGroup,
  sendData: (form: FormGroup) => void;
}

export abstract class AbstractInquiryService implements InquiryServiceInterface {
  abstract type: InquiryFormType;
  abstract getForm(): FormGroup;

  sendData(form: FormGroup): void {
    console.log('sendForm', form);
  }
}

export const INQUIRY_TOKEN = new InjectionToken<AbstractInquiryService>('INQUIRY_TOKEN');
