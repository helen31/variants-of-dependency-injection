import { Component } from '@angular/core';
import { TestService } from "./services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [TestService]
})
export class AppComponent {
  ids = [1, 2, 3];

  constructor(private testService: TestService) {
    console.log(`App component service Id = ${testService.id}`);
  }
}
