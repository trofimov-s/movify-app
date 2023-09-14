import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { config } from 'env';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({ headers: req.headers.append('Authorization', `Bearer ${config.api.token}`) }),
    );
  }
}
