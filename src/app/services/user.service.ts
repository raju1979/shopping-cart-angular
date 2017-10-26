import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Http } from "@angular/http";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  user: any;

  cart:Array<any> = [];

  private cartSubject = new Subject<any>();

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
    return this._http.get('http://localhost:5000/api/product/categorylist');
  }

  getCategoryWiseData(category: any) {
    return this._http.get(`http://localhost:5000/api/product/category/${category}`);
  };//




}
