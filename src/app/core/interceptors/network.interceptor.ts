import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '@core/services/loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  totalRequests = 0;
  completedRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this.loadingService.show();
    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {

        this.completedRequests++;

        if (this.completedRequests === this.totalRequests) {
          this.loadingService.hide();
          this.totalRequests = 0; 
          this.completedRequests = 0;
        }
      })
    );
  }
}