import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OnfidoService {

  token: string = "api_sandbox.PTV5VS6ghrM.F1HzpgpoU54ZCwzJXCU9l-U3EL8nIoZY";

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    return of(this.token);
    // const url = "https://token-factory.onfido.com/sdk_token";
    // let headers: HttpHeaders = new HttpHeaders();
    // // headers = headers.append("Accept", "application/json");
    // // headers = headers.append("Authorization", `BASIC ${this.token}`);
    // return this.http.get<string>(url, { headers: headers });
  }
}
