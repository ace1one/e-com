import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthModel } from './models/auth.mode';
import { UserModel } from './models/user.model';



@Injectable({
    providedIn: 'root'
  })
  export class AuthHttpService {

    constructor(private http : HttpClient) { }

    API_URL = `${environment.apiUrl}/auth`;
      signup(data:any): Observable<HttpResponse<any>>{
        return this.http.post<AuthModel>(`${this.API_URL}/signup`,data,{ observe: 'response'})
      }
    
      login(email:string,password:string): Observable<HttpResponse<any>>{
        return this.http.post<any>(`${this.API_URL}/login`,{email,password},{ observe: 'response'})
      }

      getUserByToken(user:any): Observable<UserModel> {
       console.log(user,user.authToken)

        const httpHeaders = new HttpHeaders({
          Authorization: `Bearer ${user.authToken}`,
        });
        return this.http.get<UserModel>(`${this.API_URL}/me`, {
          headers: httpHeaders,
        });
        
      }
    
  }
