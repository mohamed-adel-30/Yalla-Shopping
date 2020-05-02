import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from './../products.service'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
ind
prod
  constructor(private route:ActivatedRoute ,private service:ProductsService) {
    this.ind = route.snapshot.paramMap.get('id')
   }

  ngOnInit() {
    this.service.getSingleProd(this.ind).subscribe(data=>{
        this.prod = data
        console.log(this.prod);

    })
  }

}
