import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:"home" , component:ProductsComponent},
  {path:"payment" , component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
