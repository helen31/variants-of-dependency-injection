import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OhFormControlModule } from './oh-form-control/oh-form-control.module';
import { InquiryFormBusinessComponent } from './inquiry-form/inquiry-form-business/inquiry-form-business.component';
import { InquiryFormGeneralComponent } from './inquiry-form/inquiry-form-general/inquiry-form-general.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryFormBusinessComponent,
    InquiryFormGeneralComponent,
  ],
  imports: [
    BrowserModule,
    OhFormControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
