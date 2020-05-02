import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductsService } from "./../products.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  products;
  singleProd;
  counter: number = 0;
  AllProducts = [];
  productGroups = {};
  product;

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  addToCard(id) {
    this.service.getSingleProd(id).subscribe((data) => {

      this.AllProducts.push(data);
      this.service.nextFun(this.AllProducts.length);

      localStorage.setItem("product", JSON.stringify(this.AllProducts));

      this.calcCountOfPro(this.AllProducts)
    });


  }
calcCountOfPro(Arr){

  this.productGroups=Arr.reduce(function(acc,product){
   if(acc[product.id]){
     acc[product.id]+=1
   }
   else{
     acc[product.id]=1;
   }
   return acc;
  },{});
  console.log(this.productGroups);
}

removeFromCard(id){
this.AllProducts

}

}
