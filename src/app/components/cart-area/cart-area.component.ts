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

  gender:string = 'Female';

  imagesArray = ["Black-Shoe-420x279.png","Black-Shoe-PNG-Clipart-420x178.png","Black-Shoe-PNG-File-420x279.png","Black-Shoe-PNG-Image-420x236.png","Black-Shoe-PNG-Transparent-Image-420x203.png","Black-Shoe-Transparent-Background-420x216.png","Female-Shoes-279x279.png","Female-Shoes-PNG-File-332x279.png","Female-Shoes-PNG-Free-Download-349x279.png","Female-Shoes-PNG-HD-376x279.png","Female-Shoes-PNG-Image-303x279.png","Female-Shoes-PNG-Pic-279x279.png","Female-Shoes-PNG-Picture-420x220.png","Female-Shoes-PNG-Transparent-Image-420x210.png","Female-Shoes-Transparent-Background-265x279.png","Nike-Shoes-420x231.png","Nike-Shoes-PNG-Clipart-420x218.png","Nike-Shoes-PNG-File-420x245.png","Nike-Shoes-PNG-Image-346x279.png","Nike-Shoes-PNG-Transparent-Image-420x212.png","Nike-Shoes-Transparent-PNG-266x279.png","Sneaker-280x279.png","Sneaker-PNG-Clipart-368x279.png","Sneaker-PNG-File-380x279.png","Sneaker-PNG-Image-377x279.png","Sneaker-PNG-Transparent-Image-363x279.png","Sneaker-Transparent-PNG-420x236.png","Vector-Shoes-253x279.png","Vector-Shoes-PNG-Clipart-420x220.png","Vector-Shoes-PNG-File-279x279.png","Vector-Shoes-PNG-Free-Download-420x220.png","Vector-Shoes-PNG-HD-372x279.png","Vector-Shoes-PNG-Image-372x279.png","Vector-Shoes-PNG-Transparent-Image-396x279.png","Vector-Shoes-Transparent-Background-330x279.png","Vector-Shoes-Transparent-PNG-415x279.png"];
  

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
            this.getRandomImage();
            console.log(this.productsInSelectedCategory)
          }
        }
      )
  };//

  setGender(gender,$event){
    this.gender = $event.target.attributes['data-gender'].value;
  }


  getRandomImage(){
    let startIndex = 0;
    let endIndex = this.imagesArray.length - 1;

    this.productsInSelectedCategory.forEach((item) => {
      let imageIndex = this.getRandomInt(startIndex,endIndex);
      item['picture'] = "https://hybridappwala.com/cdn/shopping-cart/images/"+this.imagesArray[imageIndex]
    })   
    

    //return (`https://hybridappwala.com/cdn/shopping-cart/images/${this.imagesArray[imageIndex]}`);
    
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };//


  productAdded($event){
    console.log($event)
  }

  

}
