import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token:any = '';
        console.log(request)
        if (localStorage.getItem('jwt')) {
            token = localStorage.getItem('jwt');
        }
        if (sessionStorage.getItem('jwt')) {
            token = sessionStorage.getItem('jwt');
        }
        if (token != "") {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        // send request with token. if refrsh token, get refresh token and send request again
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse && error.status === 401 && !this.isRefreshing) {
                    this.isRefreshing = true
                    localStorage.removeItem("jwt")
                    const err = error
                    if (err.error.refresh_token) {
                        localStorage.setItem("jwt", err.error.refresh_token);
                        token = localStorage.getItem('jwt');
                        if (token != "") {
                            return next.handle(request = request.clone({
                                setHeaders: {
                                    Authorization: 'Bearer ' + token
                                }
                            }))
                        }
                    } else {
                        this.router.navigate(['/auth/login'])
                    }

                } else if (error.message === 'The token has been blacklisted') {
                    window.location.reload();
                    console.log(error);
                    this.router.navigate(['/auth/login'])
                }
                this.isRefreshing = false
                return throwError(error);
            })
        );
    }
}