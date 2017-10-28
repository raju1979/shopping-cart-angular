import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor(private _userService:UserService,private _flashMessageService:FlashMessagesService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(valid,data){
    console.log(data)
    this._userService.verfiyCode(data)
      .subscribe(
        (response) => {
          let responseData = response.json();
          if(responseData.success == true){
            this._flashMessageService.show('Verification Success. Please login', { cssClass: 'alert-success', timeout: 4000 });
            setTimeout(() => {
              this._router.navigate(['/login']);
            },4000)
          }else{
            this._flashMessageService.show('Data not matched. try again', { cssClass: 'alert-danger', timeout: 4000 });
            
          }
        },
        (err) => {

        }
      )


  }

}
