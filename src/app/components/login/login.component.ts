
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router, RouterModule } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _localSt: LocalStorageService, private _userService: UserService, private _flashMessageService: FlashMessagesService, private _router: Router) { }

  ngOnInit() {

  }

  onSubmit(valid: boolean, form) {
    console.log(valid, form)
    if (valid) {
      this._userService.loginUser(form)
        .subscribe(
        (response) => {
          let responseData = response.json();
          console.log(responseData)
          if (responseData.success == false) {
            this.showFlashMessage(responseData.reason,responseData.errorcode);
          }else{
            this._flashMessageService.show('Login Success!', { cssClass: 'alert-success', timeout: 2000 });
            setTimeout(() => {
              this._userService.setUser(form);
              this._router.navigate(['/cart']);
            }, 2000)
          }
        }
        )
      
    }
  };//


  showFlashMessage(msg:string,code:number){

    if(code == 3){
      this._flashMessageService.show('Email not verified!', { cssClass: 'alert-error', timeout: 4000 });
      setTimeout(() => {
        this._router.navigate(['/verify']);
      }, 4000)
    }else{
      this._flashMessageService.show('Invalid Email/Password OR usr not exists!', { cssClass: 'alert-error', timeout: 4000 });      
    }   

  }

}
