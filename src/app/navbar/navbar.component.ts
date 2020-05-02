import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from "./../products.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggle = true
  counter
  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.BehaviorSubjectData.subscribe(count => { this.counter=count; })
  }
  onClick(){
    this.toggle =false
    setTimeout(() => {
      this.toggle=true
    },1000);
  }


}
