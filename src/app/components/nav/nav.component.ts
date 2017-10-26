import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit, OnDestroy {

  userLoggedIn: boolean = false;
  currentUser: any;

  message:any;
  subscription: Subscription;

  cart:Array<any> = [];

  constructor(private _localSt: LocalStorageService, private _userService: UserService, private _router: Router) { 

    // subscribe to home component messages
  this.subscription = this._userService.getMessage().subscribe(message => {
         this.cart = message.product;
         console.log(message)
   });
    

  }

  ngOnInit() {
    this._localSt.observe('userdata')
      .subscribe((newValue) => {
        if (newValue === null) {
          this.userLoggedIn = false;
          this._router.navigate(["login"])
        } else {
          console.log("success");
          this.userLoggedIn = true;
          this._router.navigate(["cart"])

          console.log(JSON.parse(newValue))
          this.currentUser = JSON.parse(newValue);
        }

      })

  }

  ngAfterViewInit() {

    let userData = this._localSt.retrieve('userdata');
    console.log(userData)
    if (userData === null) {
      this.userLoggedIn = false;
      this._router.navigate(["login"])
    } else {
      console.log("success");
      this.userLoggedIn = true;
      this._router.navigate(["cart"])

      console.log(JSON.parse(userData))
      this.currentUser = JSON.parse(userData);

    }


  };//

  logout() {
    this._localSt.clear('userdata');
    // this.userLoggedIn = false;
    // this._router.navigate(["login"])
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  checkout(){
    this._router.navigate(['/checkout',{cart:JSON.stringify(this.cart)}])
  }




}
