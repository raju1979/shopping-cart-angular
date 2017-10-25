import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {Http} from "@angular/http";


@Injectable()
export class UserService {

  user:any;

  constructor(private _localSt:LocalStorageService, private _http:Http) { 

  }

  setUser(data){
    this._localSt.store('userdata', JSON.stringify(data));
  }

  getCategoriesList(){
    return this._http.get('http://localhost:5000/api/product/categorylist');
  }

  getCategoryWiseData(category:any){
    return this._http.get(`http://localhost:5000/api/product/category/${category}`);
  }

}
