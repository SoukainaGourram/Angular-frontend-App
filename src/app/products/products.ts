import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  imports: [NgForOf, NgIf],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products implements OnInit {
  products: any;
  constructor(private productService : ProductService) {}
  ngOnInit() {

    this.getAllProducts();
    }
    getAllProducts(): void {
      this.productService.getAllProducts().subscribe({
        next : resp => { this.products = resp; },
        error : err =>{ console.log(err);}
      });
    }

  protected handleDelete(product: any) {
    let v= confirm("Are you sure you want to delete this product?");
    if(v==true){
    this.productService.deleteProduct (product).subscribe({
      next : value =>{ this.getAllProducts(); },
      error : err =>{ console.log(err);}
    });
  }
  }

}
