import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  httpData$;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // The proxy server receives the https://joke-api-strict-cors.appspot.com/jokes/random
    // from the url above. Then it makes the request to get that server’s response.
    // And finally, the proxy applies the Access-Control-Allow-Origin: * to that original response.
    this.httpData$ = this.http.get(`https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random`);
  }

}
