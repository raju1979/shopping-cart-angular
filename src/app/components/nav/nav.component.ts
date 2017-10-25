import { Component, OnInit, OnChanges,AfterViewInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { UserService } from 'app/services/user.service';
import{Router,RouterModule} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  userLoggedIn:boolean = false;
  currentUser:any;

  constructor(private _localSt:LocalStorageService, private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    this._localSt.observe('userdata')
    .subscribe((newValue) => {
        if(newValue === null){
          this.userLoggedIn = false;
          this._router.navigate(["login"])
        }else{
          console.log("success");
          this.userLoggedIn = true;
          this._router.navigate(["cart"])

          console.log(JSON.parse(newValue))
          this.currentUser = JSON.parse(newValue);
        }
      
    })
    
  }

  ngAfterViewInit(){

    let userData = this._localSt.retrieve('userdata');
    console.log(userData)
      if(userData === null){
          this.userLoggedIn = false;
          this._router.navigate(["login"])
      }else{
        console.log("success");
        this.userLoggedIn = true;
        this._router.navigate(["cart"])

        console.log(JSON.parse(userData))
        this.currentUser = JSON.parse(userData);

      }
    

  };//

  logout(){
    this._localSt.clear('userdata');
    // this.userLoggedIn = false;
    // this._router.navigate(["login"])
  }




}
