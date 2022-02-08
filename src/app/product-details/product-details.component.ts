import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  /*Nel costruttore inietto ActivatedRoute e CartService*/
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

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
  /*Funzione che passa il prodotto al metodo del servizio CartService e stampa un messaggio*/
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
}
