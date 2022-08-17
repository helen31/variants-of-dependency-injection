import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelPosition } from '../label/label.component';
import { AbstractInquiryService, INQUIRY_TOKEN } from '../../../inquiry-form/services/abstract-inquiry.service';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent {
  form: FormGroup;
  labelPosition = LabelPosition;

  constructor(@Inject(INQUIRY_TOKEN) private inquiryFormService: AbstractInquiryService) {
    this.form = this.inquiryFormService.getForm();
  }

  onSubmit(): void {
    this.inquiryFormService.sendData(this.form);
  }
}
