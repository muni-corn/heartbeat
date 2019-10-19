import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const base = environment.apiURL;

        request = request.clone({
            url: base + request.url
        });

        return next.handle(request);
    }
}
