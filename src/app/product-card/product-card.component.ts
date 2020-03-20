import { Component, OnInit } from '@angular/core';
import {ProductsService} from './../products.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products;

  constructor(private service:ProductsService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => {
      this.products=data
      console.log(this.products);
      
    })
  }
  getData(){
  
  }

}
