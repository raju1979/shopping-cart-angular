import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.css']
})
export class CartSideComponent implements OnInit {

  @Input('categories') categories:any;

  @Output('change') categoryChange = new EventEmitter();

  

  constructor(private _userService:UserService) { }

  ngOnInit() {
    
  }

  onCategorySelected(category){
    this.categoryChange.emit(category);
  }

}
