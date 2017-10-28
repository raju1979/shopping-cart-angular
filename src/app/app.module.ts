import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import {Ng2Webstorage} from 'ngx-webstorage';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CartRootComponent } from './components/cart-root/cart-root.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UserService } from './services/user.service';
import { CartAreaComponent } from './components/cart-area/cart-area.component';
import { CartSideComponent } from './components/cart-side/cart-side.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { EqualValidator } from './directives/equal-validator.directive';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';


const appRoute:Routes = [
  {path:'',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartAreaComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify',component:VerifyUserComponent},
  {path:'login',redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartRootComponent,
    LoginComponent,
    AboutComponent,
    CartAreaComponent,
    CartSideComponent,
    TruncatePipe,
    ArrayFilterPipe,
    ShoeCardComponent,
    CheckoutComponent,
    RegisterComponent,
    EqualValidator,
    VerifyUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
