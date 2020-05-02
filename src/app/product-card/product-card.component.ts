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
      console.log(data);

      this.AllProducts.push(data);
      this.service.nextFun(this.AllProducts.length);

      localStorage.setItem("product", JSON.stringify(this.AllProducts));
      for (let index = 0; index < this.AllProducts.length; index++) {
        let item = this.AllProducts[index];
        let pNum = item.id;
        this.productGroups[pNum] = this.productGroups[pNum] || [];
        this.productGroups[pNum].push(item);

      }
      console.log(this.productGroups);

    });
  }
}
