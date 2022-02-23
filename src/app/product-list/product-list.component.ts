import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DataService]
})
export class ProductListComponent implements OnInit {

  @Output() addToCart = new EventEmitter()

  public productsArr: any[] = []

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
    this.getProductsFromService()
  }
  addThisProduct(value: any){
    console.log("Check value",value)
    if(value.qty < 1) {
      value.qty = 1;
    }
    this.addToCart.emit(value)
  }

  getProductsFromService () {
    this.productsArr = this.dservice.products
    console.log("Products ",this.productsArr)
  }
}
