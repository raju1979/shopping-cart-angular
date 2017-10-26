import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart:any;

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _userService:UserService) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(
      (params) => {
        this.cart = JSON.parse(params.cart);
        console.log(this.cart)
      }
    )

  };//

  getTotal(){
    let sum = this.cart.reduce((num,item) => {
      console.log(item)
      return item.price + num;
    },0)

    return '&#8377; '+sum;

  };

  removeProduct(product){
    let productIndex = this.cart.indexOf(product);
    this.cart.splice(productIndex,1);

    this._userService.removeProductFromGlobalCart(product);
  }


}
