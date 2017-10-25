
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import{Router,RouterModule} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _localSt:LocalStorageService, private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    
  }

  onSubmit(valid:boolean,form){
    console.log(valid,form)
    if(valid){
      this._userService.setUser(form);
      this._router.navigate(['/cart']);
    }
  }

}
