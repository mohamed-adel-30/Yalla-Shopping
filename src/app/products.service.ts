import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  count:number
  private BehaviorSubject = new BehaviorSubject(this.count);
   BehaviorSubjectData = this.BehaviorSubject.asObservable();
  constructor(private http:HttpClient) {
   }

getProducts(){
  return this.http.get("http://localhost:3000/phones")
}
getSingleProd(id){
  return this.http.get("http://localhost:3000/phones/" +id)
}

nextFun(data){
  this.BehaviorSubject.next(data);
}


}
