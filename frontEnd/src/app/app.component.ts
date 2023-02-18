import { product } from './Models/Product';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from './Services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  categoriesAsObservable!: Observable<string[]>;
  productsObs!: Observable<product[]>;
  categories: string[] = [];
  products: product[] = [];
  constructor(private service: GetDataService) {}
  ngOnInit() {
    this.getCategories();
    this.allProducts();
    this.categoriesAsObservable.subscribe((x) =>
      x.map((y) => this.categories.push(y))
    );

    console.log(this.categories);
    this.productsObs.subscribe((p) =>
      p.map((pro) =>
        this.products.push(
          new product(
            pro.id,
            pro.title,
            pro.price,
            pro.description,
            pro.category,
            pro.image,
            pro.rating
          )
        )
      )
    );

    console.log(this.products);
  }

  getCategories() {
    this.categoriesAsObservable = this.service.getCategories();
  }
  allProducts() {
    this.productsObs = this.service.getProducts();
  }
}
