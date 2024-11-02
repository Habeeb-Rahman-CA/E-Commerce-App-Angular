import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/interface/product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/BigBasket/'

  getAllProducts(): Observable<APIResponse>{
    return this.http.get<APIResponse>(this.apiUrl + 'GetAllProducts')
  }
}
