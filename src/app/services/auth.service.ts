import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = `${environment.apiUrl}/auth`;

  constructor(private http : HttpClient) { }


  signup(data:any): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.API_URL}/signup`,data,{ observe: 'response'})
  }

  login(data:any): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.API_URL}/login`,data,{ observe: 'response'})
  }


}
