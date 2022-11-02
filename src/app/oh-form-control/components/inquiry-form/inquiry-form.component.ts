import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelPosition } from '../label/label.component';
import {
  INQUIRY_TOKEN, InquiryFormType,
  InquiryServiceInterface
} from '../../../inquiry-form/services/abstract-inquiry.service';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent {
  form: FormGroup;
  formType = InquiryFormType.business;
  labelPosition = LabelPosition;

  constructor(@Inject(INQUIRY_TOKEN) public inquiryFormService: InquiryServiceInterface) {
    this.form = this.inquiryFormService.getForm();
  }

  onSubmit(): void {
    this.inquiryFormService.sendData(this.form);
  }
}
