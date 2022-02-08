import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*Questa constante ha all'interno i parametri che compongono l'url del sito*/
    const routeParams = this.route.snapshot.paramMap;
    /*Questa constante ha all'interno il parametro "productId" presente nell'url
      .get serve per ricercare questo valore all'interno di routeParams*/
    const productIdFromRoute = Number(routeParams.get('productId'));

    /*.find è una funzione degli array, in questo caso di products, che serve a ricercare un certo elemento tramite una
      condizione. La condizione in questo caso è che il tipo  */
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
