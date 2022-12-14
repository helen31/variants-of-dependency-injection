import { NgModule } from '@angular/core';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { ControlErrorsComponent } from './components/control-errors/control-errors.component';
import { LabelComponent } from './components/label/label.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooseQuantityComponent } from './components/choose-quantity/choose-quantity.component';

@NgModule({
  declarations: [
    InquiryFormComponent,
    ControlErrorsComponent,
    LabelComponent,
    FormControlComponent,
    ChooseQuantityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InquiryFormComponent,
    ControlErrorsComponent,
    LabelComponent,
    FormControlComponent
  ],
})
export class OhFormControlModule {}
