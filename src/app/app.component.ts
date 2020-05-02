import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "e-commerce";



  // @Output() sendAgain = new EventEmitter<number>();
  // getCount(event) {
  //   this.sendAgain.emit(event);
  // }
}
