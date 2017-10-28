import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Http,Headers } from "@angular/http";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  user: any;

  cart:Array<any> = [];

  private cartSubject = new Subject<any>();

  // baseUrl:string = "http://localhost:5000/api/";
  baseUrl:string = "https://shoppingcartexpress.herokuapp.com/api/";


  constructor(private _localSt: LocalStorageService, private _http: Http) {

  }

  addProductToGlobalCart(message: string) {

    this.cart.push(message);

    this.cartSubject.next({ product: this.cart });

  }

  removeProductFromGlobalCart(product){
    let productIndex = this.cart.indexOf(product);
    this.cart.splice(productIndex,1);

    this.cartSubject.next({ product: this.cart });
  }

  clearMessage() {
    this.cartSubject.next();
  }

  getMessage(): Observable<any> {
    return this.cartSubject.asObservable();
  }

  setUser(data) {
    this._localSt.store('userdata', JSON.stringify(data));
  }

  getCategoriesList() {
    return this._http.get(`${this.baseUrl}product/categorylist`);
  }

  getCategoryWiseData(category: any) {
    return this._http.get(`${this.baseUrl}product/category/${category}`);
  };//end

  registerNewUser(data: any) {
    let userData:any = JSON.stringify(data);

    console.log(userData);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let successData = this._http.post(`${this.baseUrl}user/`, userData, { headers: headers });
    return successData;

  };//end

  verfiyCode(data:any){
    let userData:any = JSON.stringify(data);
    console.log(userData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let successData = this._http.post(`${this.baseUrl}user/verify`, userData, { headers: headers });
    return successData;
  }

  loginUser(data:any){
    let userData:any = JSON.stringify(data);
    console.log(userData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let successData = this._http.post(`${this.baseUrl}user/login`, userData, { headers: headers });
    return successData;
  }

  




}
