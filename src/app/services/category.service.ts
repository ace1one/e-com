import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Response } from './response';

export interface category{
  name:string;
  is_active:boolean;
  sub_category:subCategory[]
}
export interface subCategory{
  name:string;
  is_active:boolean
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = `${environment.apiUrl}/category`;
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<category[]>{
   return this.httpClient.get<Response<category[]>>(this.API_URL)
   .pipe(map(response => response.data));
  }
}
