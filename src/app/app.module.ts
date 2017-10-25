import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import {Ng2Webstorage} from 'ngx-webstorage';

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


const appRoute:Routes = [
  {path:'',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartAreaComponent},
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
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
