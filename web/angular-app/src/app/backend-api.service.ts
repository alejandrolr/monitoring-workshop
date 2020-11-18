import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const serviceUrl = 'http://node-service.default.svc.cluster.local:3002'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private readonly http: HttpClient) { }

  getTimeout() {
    const endpoint = `${serviceUrl}/timeout`;
    return this.http.get(endpoint).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getError() {
    const endpoint = `${serviceUrl}/error`;
    return this.http.get(endpoint).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getDate() {
    const endpoint = `${serviceUrl}/date`;
    return this.http.get(endpoint).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
