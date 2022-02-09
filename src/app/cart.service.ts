import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

//L'interfaccia è una specie di record, ovvero viene creato un nuovo tipo, con degli attributi all'interno. Ex. Info con all'interno type e price
export interface Info {
  type: string;
  price: number;
}

//Servizio che può essere iniettato in altri componenti o servizi. Un insieme di metodi e attributi che vanno riutilizzati in vari punti del codice
@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Array degli item nel carrello di tipo Product (interfaccia definita in products)
  items: Product[] = [];

  //Iniezione di HttpClient
  constructor(private http: HttpClient) {}

  //Metodo necessario per aggiungere al carrello un item
  addToCart(product: Product) {
    this.items.push(product);
  }

  //Metodo che da in output l'array items
  getItems() {
    return this.items;
  }

  //Metodo per la pulizia dell'array
  clearCart() {
    this.items = [];
    return this.items;
  }

  //Metodo per il recupero dell'observable dal file mandato dal (fake) database
  getShippingPrices() {
    return this.http.get<Info[]>('/assets/shipping.json');
  }
}
