import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import{Router} from '@angular/router'

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService:UserService, private _flashMessageService:FlashMessagesService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(value){
    delete value["conpassword"];
    console.log(JSON.stringify(value));
    this._userService.registerNewUser(value)
    .subscribe(
      (response) => {
        console.log(response.json());
        this._flashMessageService.show('You are successfully registered. Please check your Email!', { cssClass: 'alert-success', timeout: 4000 });
        setTimeout(() => {
          this._router.navigate(['/login']);
        },4000)
      },
      (err) => {
        console.log(err)
      }

    )
  }

}
