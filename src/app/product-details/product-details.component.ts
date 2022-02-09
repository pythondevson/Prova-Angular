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
  //definizione dell'attributo product, può ricevere valori di tipo Product (un'interface creata da noi nel file products) e di tipo undefined
  product: Product | undefined;

  /*Nel costruttore inietto ActivatedRoute e CartService*/
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    /*Questa constante ha all'interno i parametri che compongono l'url del sito tramite paramMap*/
    const routeParams = this.route.snapshot.paramMap;
    /*Questa constante ha all'interno il parametro "productId" presente nell'url
      .get serve per ricercare questo valore all'interno di routeParams*/
    const productIdFromRoute = Number(routeParams.get('productId'));

    /*.find è una funzione degli array, in questo caso dall'array products, che serve a ricercare un certo elemento tramite una condizione. In questo caso è l'id di product deve essere uguale per tipo e valore a productIsFromRoute. Nel caso sia vera questa ugualianza, inserisce tutto l'elemento dell'array all'interno di product*/
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  /*Funzione che passa il prodotto al metodo del servizio CartService e stampa un messaggio*/
  addToCart(product: Product) {
    //Chaimata del metodo addToCart di CartService con passaggio del parametro product
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
}
