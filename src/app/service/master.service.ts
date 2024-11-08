import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIResponse, ICart, ICustomer, IPlaceOrder, IUser } from '../model/interface/product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  loggedUserData: ICustomer = new ICustomer()

  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/BigBasket/'
  
  onCartAdded: Subject<boolean> = new Subject<boolean>()

  constructor(private http: HttpClient) {
    const isUser = localStorage.getItem('token')
    if (isUser != null) {
      const parseObj = JSON.parse(isUser)
      this.loggedUserData = parseObj
    }
  }

  getAllProducts(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl + 'GetAllProducts')
  }

  getAllCategories(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.apiUrl + 'GetAllCategory')
  }

  GetAllProductsByCategoryId(categoryId: number): Observable<APIResponse> {
    const url = `${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`
    return this.http.get<APIResponse>(url)
  }

  registerNewCustomer(obj: ICustomer): Observable<APIResponse> {
    const url = `${this.apiUrl}RegisterCustomer`
    return this.http.post<APIResponse>(url, obj)
  }

  loginUser(obj: IUser): Observable<APIResponse> {
    const url = `${this.apiUrl}Login`
    return this.http.post<APIResponse>(url, obj)
  }

  addToCart(obj: ICart): Observable<APIResponse> {
    const url = `${this.apiUrl}AddToCart`
    return this.http.post<APIResponse>(url, obj)
  }

  getCartProductByCustomerId(loggedUserId: number): Observable<APIResponse> {
    const url = `${this.apiUrl}GetCartProductsByCustomerId?id=${loggedUserId}`
    return this.http.get<APIResponse>(url)
  }

  deleteProductFromCartById(cartItemId: number): Observable<APIResponse> {
    const url = `${this.apiUrl}DeleteProductFromCartById?id=${cartItemId}`
    return this.http.get<APIResponse>(url)
  }

  placeOrder(obj: IPlaceOrder): Observable<APIResponse> {
    const url = `${this.apiUrl}PlaceOrder`
    return this.http.post<APIResponse>(url, obj)
  }

  getAllSaleByCustomerId(loggedUserId: number): Observable<APIResponse>{
    const url = `${this.apiUrl}GetAllSaleByCustomerId?id=${loggedUserId}`
    return this.http.get<APIResponse>(url)
  }
}
