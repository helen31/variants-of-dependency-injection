import { Injectable } from '@angular/core';
import { AbstractInquiryService, InquiryFormType } from './abstract-inquiry.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InquiryBusinessService extends AbstractInquiryService {

  constructor(public type: InquiryFormType) {
    super();
  }

  getForm(): FormGroup {
    return new FormGroup({
      inquiryType: new FormControl(this.type),
      totalQuantity: new FormControl(0, [Validators.required, Validators.max(50), Validators.min(0)]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      position: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }
}
