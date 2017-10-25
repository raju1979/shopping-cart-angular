import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

declare var _:any;

@Component({
  selector: 'cart-area',
  templateUrl: './cart-area.component.html',
  styleUrls: ['./cart-area.component.css']
})
export class CartAreaComponent implements OnInit {

  categories:Array<any> = [];

  selectedCategory:string;

  productsInSelectedCategory:Array<any> = [];

  gender:string = 'female';

  constructor(private _userService:UserService) { }

  ngOnInit() {

    this._userService.getCategoriesList()
    .subscribe(
      (response) => {
        if(response.status == 200){
          this.categories = response.json();
          this.selectedCategory = this.categories[0];
          this.getCategoryWiseProduct();
        }
      },
      (error) => {
        console.log('error')
      }
    )

  };//

  onCategorySelected($event){
    console.log($event);
    this.selectedCategory = $event;
    this.getCategoryWiseProduct();
  }

  getCategoryWiseProduct(){
    this._userService.getCategoryWiseData(this.selectedCategory)
      .subscribe(
        (response) => {
          console.log(response.json())
          let tempData = response.json();
          if(tempData.success == true){
            this.productsInSelectedCategory = tempData.data;
            console.log(this.productsInSelectedCategory)
          }
        }
      )
  };//

  setGender(gender){
    this.gender = gender;
  }

}
