import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //Si sta assegnando a products il valore della sua controparte del file ../products, passata tramite l'import, quindi si sta passando l'array di prodotti
  products = products;

  //Metodo che allerta l'utente con un messaggio, segnalandogli che il prodotto è stato condiviso
  share() {
    window.alert('The product has been shared!');
  }

  //Metodo che allerta l'utente con un messaggio, questo messaggio è passato alla funzione grazie al parametro event
  onNotify(event: string) {
    window.alert(event);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
