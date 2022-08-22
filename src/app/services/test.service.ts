import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

let counter = 0;

@Injectable()
export class TestService {
  id: number;

  constructor(private httpClient: HttpClient) {
    counter++;
    this.id = counter;
  }
}
