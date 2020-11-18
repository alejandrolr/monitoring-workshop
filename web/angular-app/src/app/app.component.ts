import { Component } from '@angular/core';
import { BackendApiService } from './backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-app';
  result = '';

  constructor(private backendService: BackendApiService) {}

  getTimeout() {
    this.backendService.getTimeout().subscribe(result => {
      this.result = result.timeout;
    });
  }

  getError() {
    this.backendService.getError().subscribe(
      () => {},
      result => {
        console.log(result);
        this.result = result.error.error;
      });
  }

  getDate() {
    this.backendService.getDate().subscribe(result => {
      this.result = result.date;
    });
  }
}
