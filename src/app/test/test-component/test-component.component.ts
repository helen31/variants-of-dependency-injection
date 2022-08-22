import { Component, Input, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  @Input() id!: number;

  constructor(private testService: TestService) {
    debugger;
    console.log(`Test component service Id = ${testService.id}`);
  }

  ngOnInit(): void {
  }

}
