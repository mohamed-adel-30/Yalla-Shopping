import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [
  {path:"" , component:ProductsComponent},
  {path:"home" , component:ProductsComponent},
  {path:"payment" , component:PaymentComponent},
  {path:"product/:id" , component:SingleProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
