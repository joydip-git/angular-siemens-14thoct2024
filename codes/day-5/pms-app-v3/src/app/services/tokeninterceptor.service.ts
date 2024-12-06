import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

/*
@Injectable()
export class TokeninterceptorService implements HttpInterceptor {
  constructor(private tokenSvc: TokenService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenSvc.getToken()
    console.log(token);
    if (token) {
      const jwtToken = `Bearer ${token}`
      const clonedRequest = req.clone({
        headers: req.headers.append('Authorization', jwtToken)
      })
      console.log(clonedRequest.headers);
      return next.handle(clonedRequest)
    } else
      return next.handle(req)
  }
}
  */

//type HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>>

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {

  const tokenSvc = inject(TokenService)
  const token = tokenSvc.getToken()

  if (token) {
    const jwtToken = `Bearer ${token}`
    const clonedRequest = req.clone({
      headers: req.headers.append('Authorization', jwtToken)
    })
    return next(clonedRequest)
  } else
    return next(req)
}
