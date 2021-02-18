import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productName:string = "";
  
  products = new Array<string>();

  showModal: boolean = false;

  add(product: string) {
    if (product != "") {

      this.products.push(product);
      this.productName = "";
    }
  }

  remove() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  delete() {
    this.products.splice(0, this.products.length);
    this.showModal = false;
  }

}
