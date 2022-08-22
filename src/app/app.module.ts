import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OhFormControlModule } from './oh-form-control/oh-form-control.module';
import { InquiryFormBusinessComponent } from './inquiry-form/inquiry-form-business/inquiry-form-business.component';
import { InquiryFormGeneralComponent } from './inquiry-form/inquiry-form-general/inquiry-form-general.component';
import { HttpClientModule } from "@angular/common/http";
import { TestModule } from "./test/test.module";
import { TestService } from "./services/test.service";

@NgModule({
  declarations: [
    AppComponent,
    InquiryFormBusinessComponent,
    InquiryFormGeneralComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OhFormControlModule,
    TestModule,
  ],
  // providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
