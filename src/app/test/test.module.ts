import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from "./test-component/test-component.component";
import { TestService } from "../services/test.service";



@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [TestComponentComponent],
  providers: [TestService],
})
export class TestModule { }
